type FormatType = 'avif' | 'webp' | 'png';

// Cloudinary configuration
const CLOUDINARY_CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'dd775hmwe';
const CLOUDINARY_BASE_URL = `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload`;

// Fallback image URL if Cloudinary fails
const FALLBACK_IMAGE = '/images/placeholder.png';

// Use a static cache-buster for consistent client/server rendering
const CACHE_BUSTER = '20230515';

/**
 * Создает URL для Cloudinary с поддержкой динамической загрузки
 * 
 * @param path Путь к изображению (может быть с /images/ или без)
 * @param format Нужный формат изображения
 * @param isSplash Использовать ли splash версию для персонажей
 * @returns URL изображения
 */
export function getCloudinaryUrl(path: string, format: FormatType = 'avif', isSplash: boolean = false): string {
  try {
    // Проверка наличия пути
    if (!path) return FALLBACK_IMAGE;
    
    // Очищаем путь от лишних элементов
    let cleanPath = path.startsWith('/') ? path.substring(1) : path;
    cleanPath = cleanPath.replace('images/', '');
    
    // Определяем, является ли это изображение персонажа
    const isCharacter = cleanPath.includes('characters/');
    
    // Извлекаем имя ресурса (персонажа, оружия и т.д.)
    let resourceName = cleanPath;
    if (cleanPath.includes('/')) {
      const pathSegments = cleanPath.split('/');
      resourceName = pathSegments[pathSegments.length - 1];
    }
    
    // Удаляем расширение файла, если оно есть
    resourceName = resourceName.replace(/\.(png|jpg|jpeg|webp|avif|gif)$/, '');
    
    // Добавляем _splash для splash-версий персонажей
    if (isCharacter && isSplash) {
      resourceName = `${resourceName}_splash`;
    }
    
    // Настройка качества изображения в зависимости от формата
    // Используем максимально высокое качество для AVIF (80-85 обычно достаточно для AVIF)
    let quality = format === 'avif' ? '85' : '100';
    
    // Специальные настройки для AVIF для обеспечения хорошего качества
    let transformations = format === 'avif' 
      ? `f_${format},q_${quality},fl_preserve_transparency` 
      : `f_${format},q_${quality}`;
    
    // Используем явный формат и качество с прикреплением стабильного кеш-бастера
    return `${CLOUDINARY_BASE_URL}/${transformations}/${resourceName}?v=${CACHE_BUSTER}`;
  } catch (error) {
    console.error('Error generating Cloudinary URL:', error);
    return FALLBACK_IMAGE;
  }
}

/**
 * Функция для получения источников изображения для тега picture
 * с проверкой наличия изображения в Cloudinary
 * 
 * @param path Путь к изображению без расширения
 * @param isSplash Использовать ли splash версию изображения
 * @returns Объект с URL для разных форматов
 */
export function getImageSources(path: string, isSplash: boolean = false) {
  // Создаем отдельные URLs для каждого формата
  return {
    avif: getCloudinaryUrl(path, 'avif', isSplash),
    webp: getCloudinaryUrl(path, 'webp', isSplash),
    png: getCloudinaryUrl(path, 'png', isSplash)
  };
}

/**
 * Формирует полный URL Cloudinary с трансформациями
 * @param resourcePath Путь к ресурсу в Cloudinary
 * @param options Опции трансформации
 * @returns Полный URL с трансформациями
 */
export function buildCloudinaryUrl(
  path: string,
  transformations: {
    width?: number;
    height?: number;
    format?: FormatType;
    crop?: 'fill' | 'fit' | 'scale';
    quality?: number;
  } = {}
): string {
  try {
    // Check for empty path
    if (!path) return FALLBACK_IMAGE;
    
    // Clean the path
    let cleanPath = path.startsWith('/') ? path.substring(1) : path;
    cleanPath = cleanPath.replace('images/', '');
    
    // Extract the resource name
    let resourceName = cleanPath;
    if (cleanPath.includes('/')) {
      const pathSegments = cleanPath.split('/');
      resourceName = pathSegments[pathSegments.length - 1];
    }
    
    // Remove file extension if present
    resourceName = resourceName.replace(/\.(png|jpg|jpeg|webp|avif|gif)$/, '');

    // Default transformations с высоким качеством для всех форматов
    const width = transformations.width ?? 'auto';
    const height = transformations.height ?? 'auto';
    const format = transformations.format ?? 'avif';
    const crop = transformations.crop ?? 'fill';
    
    // Определяем качество в зависимости от формата
    let quality = transformations.quality;
    if (!quality) {
      quality = format === 'avif' ? 85 : 100;
    }
    
    // Добавляем специальные настройки для AVIF
    let transformString = '';
    if (format === 'avif') {
      transformString = `w_${width},h_${height},c_${crop},q_${quality},f_${format},fl_preserve_transparency`;
    } else {
      transformString = `w_${width},h_${height},c_${crop},q_${quality},f_${format}`;
    }
    
    // Используем стабильный кеш-бастер
    return `${CLOUDINARY_BASE_URL}/${transformString}/${resourceName}?v=${CACHE_BUSTER}`;
  } catch (error) {
    console.error('Error building Cloudinary URL:', error);
    return FALLBACK_IMAGE;
  }
} 
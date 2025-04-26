// Тестовый файл для проверки генерации URL Cloudinary
const { getCloudinaryUrl, getImageSources } = require('./cloudinary');

console.log('Тест функции getCloudinaryUrl:');
console.log(getCloudinaryUrl('characters/seele', 'webp', false));
console.log(getCloudinaryUrl('characters/seele', 'webp', true));
console.log(getCloudinaryUrl('/images/characters/kafka', 'png', false));

console.log('\nТест функции getImageSources:');
const sources = getImageSources('characters/blade', false);
console.log(sources);

const sourcesSplash = getImageSources('characters/blade', true);
console.log(sourcesSplash);

// Тестовый скрипт для проверки URL Cloudinary
const cloudName = 'dd775hmwe'; // ваш cloud name в Cloudinary

// Примеры путей для тестирования
const paths = [
  'characters/seele',
  'characters/seele_splash',
  'light-cones/in-the-night',
  'relics/hunter-of-glacial-forest'
];

// Функция генерации оптимизированного URL
function generateUrl(path) {
  return `https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_auto/${path}`;
}

// Вывод всех тестовых URL
console.log('=== Тестовые URL для Cloudinary с автоматической оптимизацией ===');
for (const path of paths) {
  console.log(`\nPath: ${path}`);
  console.log(`Оптимизированный URL: ${generateUrl(path)}`);
}

// Пример использования в HTML:
console.log('\n=== Пример использования в HTML ===');
const examplePath = 'characters/seele_splash';
console.log(`
<img src="${generateUrl(examplePath)}" alt="Зеле">
`);

// Инструкция по загрузке в Cloudinary
console.log('\n=== Как загрузить изображения в Cloudinary ===');
console.log('1. Загрузите файлы в Cloudinary с путями как в примерах выше');
console.log('2. Загрузите в любом формате (WebP, PNG, JPG)');
console.log('3. Cloudinary автоматически оптимизирует изображения для браузера');
console.log('4. Не забудьте добавить _splash версии для основных изображений персонажей'); 
/**
 * Утилита для обновления версии сборки при добавлении новых изображений
 * 
 * Использование: node app/utils/refresh-images.js
 */

const fs = require('fs');
const path = require('path');

// Путь к файлу .env.local
const envFilePath = path.join(process.cwd(), '.env.local');

// Функция для создания новой версии
function generateNewVersion() {
  const date = new Date();
  return `v1.0.0_${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, '0')}${String(date.getDate()).padStart(2, '0')}_${date.getTime()}`;
}

// Чтение и обновление файла .env.local
function updateBuildVersion() {
  try {
    let envContent = '';
    
    // Проверяем существует ли файл
    if (fs.existsSync(envFilePath)) {
      envContent = fs.readFileSync(envFilePath, 'utf8');
      
      // Обновляем переменную BUILD_VERSION
      if (envContent.includes('NEXT_PUBLIC_BUILD_VERSION=')) {
        envContent = envContent.replace(
          /NEXT_PUBLIC_BUILD_VERSION=.*/,
          `NEXT_PUBLIC_BUILD_VERSION=${generateNewVersion()}`
        );
      } else {
        // Добавляем переменную, если её нет
        envContent += `\nNEXT_PUBLIC_BUILD_VERSION=${generateNewVersion()}\n`;
      }
    } else {
      // Создаем новый файл
      envContent = `# Переменная для обхода кеширования изображений - обновляется автоматически
NEXT_PUBLIC_BUILD_VERSION=${generateNewVersion()}\n`;
    }
    
    // Записываем обновленное содержимое
    fs.writeFileSync(envFilePath, envContent);
    
    console.log('BUILD_VERSION успешно обновлена!');
    console.log('Перезапустите сервер для применения изменений.');
  } catch (error) {
    console.error('Ошибка при обновлении BUILD_VERSION:', error);
  }
}

// Запускаем обновление
updateBuildVersion(); 
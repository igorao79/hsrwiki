export const dynamic = 'force-static';
export const dynamicParams = false;

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Header } from '@/app/components/Header/Header';
import { RarityStars } from '@/app/components/RarityStars/RarityStars';
import { fiveStarLightCones, fourStarLightCones, threeStarLightCones } from '@/app/data/lightCones';
import { getImageSources, getLightConeImageSources } from '@/app/utils/cloudinary';
import styles from './LightConeDetails.module.scss';
import { BackButton } from './BackButton';

// Переводы путей на русский язык
const pathTranslations: Record<string, string> = {
  'Destruction': 'Разрушение',
  'Hunt': 'Охота',
  'Erudition': 'Эрудиция',
  'Harmony': 'Гармония',
  'Nihility': 'Небытие',
  'Preservation': 'Сохранение',
  'Abundance': 'Изобилие',
};

/**
 * Функция для форматирования текста с выделением числовых значений
 * @param text Исходный текст
 * @returns Форматированный текст с выделенными значениями
 */
function formatStatsText(text: string): React.ReactNode {
  if (!text) return text;
  
  // Регулярное выражение для поиска числовых значений с % или других характеристик
  const regex = /(\d+(?:\.\d+)?%)|(\+\d+(?:\.\d+)?%?)|([\-]\d+(?:\.\d+)?%?)|(УРН \+\d+(?:\.\d+)?%?)|(ЗЩТ \+\d+(?:\.\d+)?%?)/g;
  
  // Разбиваем текст на части: те, что соответствуют регулярному выражению и остальные
  const parts = text.split(regex);
  const matches = text.match(regex) || [];
  
  // Собираем результат, оборачивая найденные значения в span с соответствующим классом
  const result: React.ReactNode[] = [];
  let matchIndex = 0;
  
  parts.forEach((part, index) => {
    if (part) {
      result.push(part);
    }
    
    if (matchIndex < matches.length && index < parts.length - 1) {
      result.push(
        <span key={index} className={styles.highlightedValue}>
          {matches[matchIndex++]}
        </span>
      );
    }
  });
  
  return <>{result}</>;
}

// Генерируем статические пути для всех световых конусов
export function generateStaticParams() {
  const allLightCones = [
    ...fiveStarLightCones,
    ...fourStarLightCones,
    ...threeStarLightCones
  ];
  
  return allLightCones.map((lightCone) => ({
    id: lightCone.id,
  }));
}

export default function LightConePage({ params }: { params: { id: string } }) {
  const id = params.id;
  
  // Получаем световой конус по ID
  const allLightCones = [
    ...fiveStarLightCones,
    ...fourStarLightCones,
    ...threeStarLightCones
  ];
  
  const lightCone = allLightCones.find((lc) => lc.id === id);

  // Если световой конус не найден, возвращаем 404
  if (!lightCone) {
    notFound();
  }

  const lightConeImages = getLightConeImageSources(lightCone.id);
  const pathImages = getImageSources(`images/paths/${lightCone.path.toLowerCase()}`);
  
  // Получаем перевод пути
  const translatedPath = pathTranslations[lightCone.path] || lightCone.path;

  return (
    <>
      <Header />
      
      <div className="container">
        <div className={styles.pageContainer}>
          {/* Используем клиентский компонент для кнопки "Назад" */}
          <BackButton className={styles.backButton} />
          
          <div className={styles.header}>
            <div className={styles.imageContainer}>
              <picture>
                <source srcSet={lightConeImages.avif} type="image/avif" />
                <source srcSet={lightConeImages.webp} type="image/webp" />
                <img 
                  src={lightConeImages.png} 
                  alt={lightCone.name} 
                  className={styles.lightConeImage}
                />
              </picture>
            </div>
            
            <div className={styles.info}>
              <h1 className={styles.name}>{lightCone.name}</h1>
              <RarityStars rarity={lightCone.rarity} />
              
              <div className={styles.pathContainer}>
                <picture>
                  <source srcSet={pathImages.avif} type="image/avif" />
                  <source srcSet={pathImages.webp} type="image/webp" />
                  <img 
                    src={pathImages.png} 
                    alt={translatedPath}
                    width={24}
                    height={24}
                    className={styles.pathImage}
                  />
                </picture>
                <span className={styles.pathName}>{translatedPath}</span>
              </div>
              
              {lightCone.patch && (
                <div className={styles.version}>Добавлен в версии {lightCone.patch}</div>
              )}
            </div>
          </div>
          
          <div className={styles.statsContainer}>
            <h3>Базовые характеристики</h3>
            <div className={styles.stats}>
              <div className={styles.stat}>
                <span>HP:</span>
                <span>{lightCone.baseStats.hp}</span>
              </div>
              <div className={styles.stat}>
                <span>ATK:</span>
                <span>{lightCone.baseStats.atk}</span>
              </div>
              <div className={styles.stat}>
                <span>DEF:</span>
                <span>{lightCone.baseStats.def}</span>
              </div>
            </div>
          </div>
          
          <div className={styles.skillContainer}>
            <h3>Умение: {lightCone.skill.name}</h3>
            <p>{formatStatsText(lightCone.skill.description)}</p>
            
            {lightCone.skill.superimposition && lightCone.skill.superimposition.length > 1 && (
              <div className={styles.superimpositionContainer}>
                <h4>Наложения:</h4>
                <ul className={styles.superimpositionList}>
                  {lightCone.skill.superimposition.map((level, index) => {
                    // Извлекаем только числовые значения с + или - знаком
                    const regex = /[+\-]\d+(?:\.\d+)?%?/g;
                    const values = level.effect.match(regex) || [];
                    
                    // Пропускаем первый уровень (базовое значение)
                    if (index === 0) return null;
                    
                    return (
                      <li key={index} className={styles.superimpositionLevel}>
                        <span className={styles.levelNumber}>Ур. {level.level}:</span> 
                        {values.map((value, valueIndex) => (
                          <span key={valueIndex} className={styles.highlightedValue}>
                            {value}{valueIndex < values.length - 1 ? ' ' : ''}
                          </span>
                        ))}
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
          
          {lightCone.upgradeMaterials && lightCone.upgradeMaterials.length > 0 && (
            <div className={styles.materialsContainer}>
              <h3>Материалы возвышения</h3>
              <div className={styles.materials}>
                {lightCone.upgradeMaterials.map((stage) => (
                  <div key={stage.stage} className={styles.materialLevel}>
                    <h4>Уровень {stage.stage}</h4>
                    <ul>
                      {stage.materials.map((material, index) => (
                        <li key={index}>{material.name} x{material.count}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {lightCone.recommendedCharacters && lightCone.recommendedCharacters.length > 0 && (
            <div className={styles.recommendedContainer}>
              <h3>Рекомендуемые персонажи</h3>
              <ul className={styles.recommendedList}>
                {lightCone.recommendedCharacters.map((character, index) => (
                  <li key={index}>
                    <Link href={`/character/${character.id}`}>
                      {character.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
} 
"use client";

import Link from 'next/link';
import { LightCone } from '@/app/data/lightCones';
import { getImageSources, getLightConeImageSources } from '@/app/utils/cloudinary';
import { RarityStars } from '@/app/components/RarityStars';
import styles from './LightConeCard.module.scss';

// Перевод путей на русский язык
const pathTranslations: Record<string, string> = {
  'Destruction': 'Разрушение',
  'Hunt': 'Охота',
  'Erudition': 'Эрудиция',
  'Harmony': 'Гармония',
  'Nihility': 'Небытие',
  'Preservation': 'Сохранение',
  'Abundance': 'Изобилие',
};

interface LightConeCardProps {
  lightCone: LightCone;
  size?: 'small' | 'medium' | 'large';
}

export const LightConeCard: React.FC<LightConeCardProps> = ({ lightCone, size = 'medium' }) => {
  // Используем специальную функцию для изображений конусов света
  const lightConeImages = getLightConeImageSources(lightCone.id);
  const pathImages = getImageSources(`images/paths/${lightCone.path.toLowerCase()}`);
  
  // Добавим класс в зависимости от редкости
  const rarityClass = `rarity${lightCone.rarity}`;
  
  // Получаем русское название пути
  const pathName = pathTranslations[lightCone.path] || lightCone.path;

  return (
    <Link href={`/light-cone/${lightCone.id}`} className={`${styles.card} ${styles[size]} ${styles[rarityClass]}`}>
      <div className={styles.pathIcon}>
        <picture>
          <source srcSet={pathImages.avif} type="image/avif" />
          <source srcSet={pathImages.webp} type="image/webp" />
          <img 
            src={pathImages.png} 
            alt={pathName}
            className={styles.pathImage}
            width={20}
            height={20}
            title={pathName}
          />
        </picture>
      </div>

      <div className={styles.imageContainer}>
        <picture>
          <source srcSet={lightConeImages.avif} type="image/avif" />
          <source srcSet={lightConeImages.webp} type="image/webp" />
          <img 
            src={lightConeImages.png} 
            alt={lightCone.name} 
            className={styles.image}
            loading="lazy"
            width={100}
            height={144}
          />
        </picture>
      </div>

      <div className={styles.info}>
        <h3 className={styles.name}>{lightCone.name}</h3>
        <div className={styles.rarity}>
          <RarityStars rarity={lightCone.rarity} size="small" />
        </div>
      </div>
    </Link>
  );
}; 
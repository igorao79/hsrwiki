"use client";

import { useState } from 'react';
import { LightCone } from '@/app/data/lightCones';
import { getImageSources } from '@/app/utils/cloudinary';
import { RarityStars } from '@/app/components/RarityStars';
import LightConeDetails from './LightConeDetails';
import styles from './LightConeCard.module.scss';

interface LightConeCardProps {
  lightCone: LightCone;
  size?: 'small' | 'medium' | 'large';
}

export const LightConeCard: React.FC<LightConeCardProps> = ({ lightCone, size = 'medium' }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { avif, webp, png } = getImageSources(lightCone.imageUrl);
  const pathImages = getImageSources(`images/paths/${lightCone.path.toLowerCase()}`);
  
  // Добавим класс в зависимости от редкости
  const rarityClass = `rarity${lightCone.rarity}`;

  return (
    <>
      <div 
        className={`${styles.card} ${styles[size]} ${styles[rarityClass]}`}
        onClick={() => setIsModalOpen(true)}
      >
        <div className={styles.pathIcon}>
          <picture>
            <source srcSet={pathImages.avif} type="image/avif" />
            <source srcSet={pathImages.webp} type="image/webp" />
            <img 
              src={pathImages.png} 
              alt={lightCone.path}
              className={styles.pathImage}
              width={20}
              height={20}
            />
          </picture>
        </div>

        <div className={styles.imageContainer}>
          <picture>
            <source srcSet={avif} type="image/avif" />
            <source srcSet={webp} type="image/webp" />
            <img 
              src={png} 
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
      </div>

      {isModalOpen && (
        <LightConeDetails
          lightCone={lightCone}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}; 
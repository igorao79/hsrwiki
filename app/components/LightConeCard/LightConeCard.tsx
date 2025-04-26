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
  const { png: lightConeImg } = getImageSources(lightCone.imageUrl);
  const { png: pathImg } = getImageSources(`images/paths/${lightCone.path.toLowerCase()}`);
  
  // Класс в зависимости от редкости
  const rarityClass = `rarity${lightCone.rarity}`;

  return (
    <>
      <div 
        className={`${styles.card} ${styles[size]} ${styles[rarityClass]}`}
        onClick={() => setIsModalOpen(true)}
      >
        <div className={styles.pathIcon}>
          <img 
            src={pathImg} 
            alt={lightCone.path}
            className={styles.pathImage}
          />
        </div>

        <div className={styles.imageContainer}>
          <img 
            src={lightConeImg} 
            alt={lightCone.name} 
            className={styles.image}
          />
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
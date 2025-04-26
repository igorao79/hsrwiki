"use client";

import React from 'react';
import { LightCone } from '@/app/data/lightCones';
import { getImageSources } from '@/app/utils/cloudinary';
import { RarityStars } from '@/app/components/RarityStars';
import styles from './LightConeDetails.module.scss';

export interface LightConeDetailsProps {
  lightCone: LightCone;
  onClose: () => void;
}

const LightConeDetails: React.FC<LightConeDetailsProps> = ({ lightCone, onClose }) => {
  const { avif, webp, png } = getImageSources(lightCone.imageUrl, true);
  const pathImages = getImageSources(`images/paths/${lightCone.path.toLowerCase()}`);

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.closeButton} onClick={onClose}>×</div>
        
        <div className={styles.header}>
          <div className={styles.imageContainer}>
            <picture>
              <source srcSet={avif} type="image/avif" />
              <source srcSet={webp} type="image/webp" />
              <img 
                src={png} 
                alt={lightCone.name} 
                className={styles.lightConeImage} 
              />
            </picture>
          </div>
          
          <div className={styles.info}>
            <h2 className={styles.name}>{lightCone.name}</h2>
            <div className={styles.rarity}>
              <RarityStars rarity={lightCone.rarity} />
            </div>
            <div className={styles.pathContainer}>
              <picture>
                <source srcSet={pathImages.avif} type="image/avif" />
                <source srcSet={pathImages.webp} type="image/webp" />
                <img 
                  src={pathImages.png} 
                  alt={lightCone.path}
                  className={styles.pathImage}
                  width={24}
                  height={24}
                />
              </picture>
              <span className={styles.pathName}>{lightCone.path}</span>
            </div>
            {lightCone.patch && (
              <div className={styles.version}>
                <span>Added in version {lightCone.patch}</span>
              </div>
            )}
          </div>
        </div>
        
        <div className={styles.statsContainer}>
          <h3>Base Stats at Lv. 80</h3>
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
          <h3>Skill: {lightCone.skill.name}</h3>
          <p>{lightCone.skill.description}</p>
        </div>
        
        {lightCone.upgradeMaterials && lightCone.upgradeMaterials.length > 0 && (
          <div className={styles.materialsContainer}>
            <h3>Ascension Materials</h3>
            <div className={styles.materials}>
              {lightCone.upgradeMaterials.map((stage) => (
                <div key={stage.stage} className={styles.materialLevel}>
                  <h4>Level {stage.stage}</h4>
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
            <h3>Recommended Characters</h3>
            <ul className={styles.recommendedList}>
              {lightCone.recommendedCharacters.map((character, index) => (
                <li key={index}>{character.name}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default LightConeDetails; 
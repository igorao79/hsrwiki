"use client";

import { useState } from 'react';
import { LightCone } from '@/app/data/lightCones';
import { LightConeCard } from '../LightConeCard';
import styles from './LightConeList.module.scss';
import { getImageSources } from '@/app/utils/cloudinary';

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

// Все возможные пути
const allPaths = ['Destruction', 'Hunt', 'Erudition', 'Harmony', 'Nihility', 'Preservation', 'Abundance'];

interface LightConeListProps {
  lightCones: LightCone[];
  title: string;
}

const LightConeList: React.FC<LightConeListProps> = ({ lightCones, title }) => {
  const [searchText, setSearchText] = useState<string>('');
  const [selectedPaths, setSelectedPaths] = useState<string[]>([]);

  // Обработчик выбора/отмены пути
  const togglePath = (path: string) => {
    if (selectedPaths.includes(path)) {
      setSelectedPaths(selectedPaths.filter(p => p !== path));
    } else {
      setSelectedPaths([...selectedPaths, path]);
    }
  };

  // Фильтрация конусов
  const filteredLightCones = lightCones
    .filter(lc => 
      lc.name.toLowerCase().includes(searchText.toLowerCase()) && 
      (selectedPaths.length === 0 || selectedPaths.includes(lc.path))
    );

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      
      <div className={styles.controls}>
        <div className={styles.filter}>
          <input
            type="text"
            placeholder="Поиск по названию..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className={styles.searchInput}
          />
        </div>
        
        <div className={styles.pathFilters}>
          {allPaths.map(path => {
            const pathImages = getImageSources(`images/paths/${path.toLowerCase()}`);
            const isSelected = selectedPaths.includes(path);
            
            return (
              <button 
                key={path}
                className={`${styles.pathFilter} ${isSelected ? styles.selected : ''}`}
                onClick={() => togglePath(path)}
                title={pathTranslations[path] || path}
              >
                <picture>
                  <source srcSet={pathImages.avif} type="image/avif" />
                  <source srcSet={pathImages.webp} type="image/webp" />
                  <img 
                    src={pathImages.png} 
                    alt={pathTranslations[path] || path}
                    width={30}
                    height={30}
                  />
                </picture>
                <span>{pathTranslations[path] || path}</span>
              </button>
            );
          })}
        </div>
      </div>
      
      <div className={styles.grid}>
        {filteredLightCones.length > 0 ? (
          filteredLightCones.map((lightCone) => (
            <div key={lightCone.id} className={styles.gridItem}>
              <LightConeCard lightCone={lightCone} />
            </div>
          ))
        ) : (
          <div className={styles.noResults}>Не найдено конусов, соответствующих поиску</div>
        )}
      </div>
    </div>
  );
};

export default LightConeList; 
"use client";

import { useState } from 'react';
import { LightCone } from '@/app/data/lightCones';
import { LightConeCard } from '../LightConeCard';
import styles from './LightConeList.module.scss';

interface LightConeListProps {
  lightCones: LightCone[];
  title: string;
}

const LightConeList: React.FC<LightConeListProps> = ({ lightCones, title }) => {
  const [sortBy, setSortBy] = useState<'name' | 'path'>('name');
  const [filter, setFilter] = useState<string>('');

  // Сортировка и фильтрация конусов
  const filteredAndSortedLightCones = lightCones
    .filter(lc => 
      lc.name.toLowerCase().includes(filter.toLowerCase()) || 
      lc.path.toLowerCase().includes(filter.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      } else {
        return a.path.localeCompare(b.path);
      }
    });

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      
      <div className={styles.controls}>
        <div className={styles.filter}>
          <input
            type="text"
            placeholder="Поиск по имени или пути..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className={styles.searchInput}
          />
        </div>
        
        <div className={styles.sort}>
          <span>Сортировка:</span>
          <div className={styles.sortButtons}>
            <button 
              className={`${styles.sortButton} ${sortBy === 'name' ? styles.active : ''}`}
              onClick={() => setSortBy('name')}
            >
              По имени
            </button>
            <button 
              className={`${styles.sortButton} ${sortBy === 'path' ? styles.active : ''}`}
              onClick={() => setSortBy('path')}
            >
              По пути
            </button>
          </div>
        </div>
      </div>
      
      <div className={styles.grid}>
        {filteredAndSortedLightCones.length > 0 ? (
          filteredAndSortedLightCones.map((lightCone) => (
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
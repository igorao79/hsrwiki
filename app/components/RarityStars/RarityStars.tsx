'use client';

import { FaStar } from 'react-icons/fa';
import './RarityStars.scss';

interface RarityStarsProps {
  rarity: number;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export const RarityStars = ({ 
  rarity, 
  size = 'medium',
  className = ''
}: RarityStarsProps) => {
  // Определяем цвет звезд в зависимости от редкости
  const starColor = rarity === 5 ? 'gold' : 'purple';
  
  return (
    <div className={`rarity-stars ${className}`}>
      {[...Array(rarity)].map((_, i) => (
        <FaStar 
          key={i} 
          className={`rarity-stars__star rarity-stars__star--${starColor} rarity-stars__star--${size}`}
        />
      ))}
    </div>
  );
}; 
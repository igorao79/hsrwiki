'use client';

import { RarityStars } from '../RarityStars';
import './CharacterRarity.scss';

interface CharacterRarityProps {
  name: string;
  rarity: number;
  className?: string;
}

export const CharacterRarity = ({
  name,
  rarity,
  className = '',
}: CharacterRarityProps) => {
  return (
    <div className={`character-rarity ${className}`}>
      <h1 className="character-rarity__name">{name}</h1>
      <RarityStars rarity={rarity} size="large" className="character-rarity__stars" />
    </div>
  );
}; 
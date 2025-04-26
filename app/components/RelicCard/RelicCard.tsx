'use client';

import Image from 'next/image';
import { RarityStars } from '../RarityStars';
import { getImageSources } from '../../utils/cloudinary';
import './RelicCard.scss';

interface RelicCardProps {
  id: string;
  name: string;
  imageUrl: string;
  rarity: number;
  set: string;
  piece: string;
  className?: string;
}

export const RelicCard = ({
  id,
  name,
  imageUrl,
  rarity,
  set,
  piece,
  className = '',
}: RelicCardProps) => {
  const imageSources = getImageSources(imageUrl);
  
  return (
    <div className={`relic-card ${className}`}>
      <div className="relic-card__image-container">
        <Image
          src={imageSources.png}
          alt={name}
          width={100}
          height={100}
          className="relic-card__image"
        />
      </div>
      <div className="relic-card__info">
        <h3 className="relic-card__name">{name}</h3>
        <div className="relic-card__details">
          <span className="relic-card__set">{set}</span>
          <span className="relic-card__piece">{piece}</span>
        </div>
        <div className="relic-card__rarity">
          <RarityStars rarity={rarity} size="small" />
        </div>
      </div>
    </div>
  );
}; 
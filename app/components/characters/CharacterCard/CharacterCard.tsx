'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { RarityStars } from '../../RarityStars';
import { getImageSources } from '@/app/utils/cloudinary';
import { elementTranslations, pathTranslations } from '@/app/utils/translations';
import './CharacterCard.scss';

interface CharacterCardProps {
  id: string;
  name: string;
  element: string;
  path: string;
  rarity: number;
  imageUrl: string;
}

/**
 * Создает URL изображения с кеш-бастером для первой и единственной загрузки
 */
function createImageUrl(imageUrl: string): string {
  const CLOUDINARY_CLOUD_NAME = 'dd775hmwe';
  
  // Очищаем путь от лишних префиксов
  let resourceName = imageUrl
    .replace('characters/', '')
    .replace('/images/', '')
    .replace('images/', '')
    .replace(/\.(png|jpg|jpeg|webp|avif|gif)$/i, '');

  // Добавляем суффикс _splash если его нет
  if (!resourceName.endsWith('_splash')) {
    resourceName = `${resourceName}_splash`;
  }
  
  // Используем специфичный формат и встроенный кеш-бастер
  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/f_avif,q_90/${resourceName}?v=20230515`;
}

export const CharacterCard = ({ 
  id, 
  name, 
  element, 
  path, 
  rarity, 
  imageUrl 
}: CharacterCardProps) => {
  // Перевод элемента и пути
  const translatedElement = elementTranslations[element] || element;
  const translatedPath = pathTranslations[path] || path;
  
  // Создаем URL изображения для персонажа и пути
  const optimizedImageUrl = createImageUrl(imageUrl);
  const pathImages = getImageSources(`images/paths/${path.toLowerCase()}`);
  const elementImages = getImageSources(`images/elements/${element.toLowerCase()}`);

  return (
    <Link href={`/character/${id}`} className="character-card">
      <div className="character-card__container">
        <div className="character-card__image-container">
          <Image
            src={optimizedImageUrl}
            alt={name}
            width={280}
            height={400}
            className="character-card__image"
            priority={id === 'dhil' || id === 'fu-xuan' || id === 'topaz'}
            unoptimized={true}
          />
          <div className={`character-card__element-container character-card__element--${element.toLowerCase()}`}>
            <picture>
              <source srcSet={elementImages.avif} type="image/avif" />
              <source srcSet={elementImages.webp} type="image/webp" />
              <img 
                src={elementImages.png} 
                alt={translatedElement}
                className="character-card__element-image"
                width={20}
                height={20}
              />
            </picture>
            <span className="character-card__element-text">
              {translatedElement}
            </span>
          </div>
        </div>
        <div className="character-card__info">
          <h3 className="character-card__name">{name}</h3>
          <div className="character-card__details">
            <div className="character-card__path-container">
              <picture>
                <source srcSet={pathImages.avif} type="image/avif" />
                <source srcSet={pathImages.webp} type="image/webp" />
                <img 
                  src={pathImages.png} 
                  alt={translatedPath}
                  className="character-card__path-image"
                  width={24}
                  height={24}
                />
              </picture>
              <span className="character-card__path-name">{translatedPath}</span>
            </div>
            <div className="character-card__rarity">
              <RarityStars rarity={rarity} size="small" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}; 
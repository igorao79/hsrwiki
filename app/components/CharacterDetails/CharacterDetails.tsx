'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import { getImageSources } from '@/app/utils/cloudinary';
import './CharacterDetails.scss';

export interface LightCone {
  id: string;
  name: string;
  imageUrl: string;
  rarity: number;
}

export interface Relic {
  id: string;
  name: string;
  imageUrl: string;
  set: string;
  piece: string;
}

export interface TeamMember {
  id: string;
  name: string;
  imageUrl: string;
  element: string;
}

export interface CharacterDetailsProps {
  id: string;
  name: string;
  element: string;
  path: string;
  rarity: number;
  imageUrl: string;
  description: string;
  bestLightCones: LightCone[];
  bestRelics: Relic[];
  recommendedTeams: {
    name: string;
    members: TeamMember[];
  }[];
}

// Переводы элементов на русский
const elementTranslations: Record<string, string> = {
  'Physical': 'Физический',
  'Fire': 'Огонь',
  'Ice': 'Лёд',
  'Lightning': 'Молния',
  'Wind': 'Ветер',
  'Quantum': 'Квантовый',
  'Imaginary': 'Мнимый'
};

// Переводы путей на русский
const pathTranslations: Record<string, string> = {
  'Destruction': 'Разрушение',
  'Hunt': 'Охота',
  'Erudition': 'Эрудиция',
  'Harmony': 'Гармония',
  'Nihility': 'Небытие',
  'Preservation': 'Сохранение',
  'Abundance': 'Изобилие'
};

// Предпочтительные форматы изображений
const preferredFormat = 'avif';

// Глобальный ключ кеша (создается только один раз при сборке)
const CACHE_KEY = '20230515';

/**
 * Создает URL изображения с кеш-бастером для первой и единственной загрузки
 */
function createImageUrl(imageUrl: string, isSplash: boolean = false): string {
  const CLOUDINARY_CLOUD_NAME = 'dd775hmwe';
  
  // Очищаем путь от лишних префиксов
  let resourceName = imageUrl
    .replace('characters/', '')
    .replace('/images/', '')
    .replace('images/', '')
    .replace(/\.(png|jpg|jpeg|webp|avif|gif)$/i, '');

  // Добавляем суффикс _splash если его нет и это нужно
  if (isSplash && !resourceName.endsWith('_splash')) {
    resourceName = `${resourceName}_splash`;
  }
  
  // Используем специфичный формат и встроенный кеш-бастер
  // Это предотвратит дублирующие запросы, так как URL будет сразу с кеш-бастером
  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/f_${preferredFormat},q_90/${resourceName}?v=${CACHE_KEY}`;
}

export const CharacterDetails = ({
  name,
  element,
  path,
  rarity,
  imageUrl,
  description,
  bestLightCones,
  bestRelics,
  recommendedTeams,
}: CharacterDetailsProps) => {
  // Перевод элемента и пути
  const translatedElement = elementTranslations[element] || element;
  const translatedPath = pathTranslations[path] || path;
  
  // Определяем цвет звезд в зависимости от редкости
  const starColor = rarity === 5 ? 'gold' : 'purple';
  
  // Получаем изображение пути
  const pathImages = getImageSources(`images/paths/${path.toLowerCase()}`);
  
  return (
    <div className="character-details">
      <div className="character-details__header">
        <div className="character-details__header-content">
          <h1 className="character-details__name">{name}</h1>
          <div className="character-details__meta">
            <span className={`character-details__element character-details__element--${element.toLowerCase()}`}>
              {translatedElement}
            </span>
            <div className="character-details__path-container">
              <picture>
                <source srcSet={pathImages.avif} type="image/avif" />
                <source srcSet={pathImages.webp} type="image/webp" />
                <img 
                  src={pathImages.png} 
                  alt={translatedPath}
                  className="character-details__path-image"
                  width={30}
                  height={30}
                />
              </picture>
              <span className="character-details__path-name">{translatedPath}</span>
            </div>
            <div className="character-details__rarity">
              {[...Array(rarity)].map((_, i) => (
                <FaStar 
                  key={i} 
                  className={`character-details__star character-details__star--${starColor}`} 
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="character-details__content">
        <div className="character-details__image-container">
          <Image
            src={createImageUrl(imageUrl, true)}
            alt={name}
            width={400}
            height={600}
            className="character-details__image"
            priority
            unoptimized={true}
          />
        </div>

        <div className="character-details__info">
          <section className="character-details__section">
            <h2 className="character-details__section-title">Описание</h2>
            <p className="character-details__description">{description}</p>
          </section>

          <section className="character-details__section">
            <h2 className="character-details__section-title">Лучшие Световые конусы</h2>
            <div className="character-details__items">
              {bestLightCones.map((lightCone, index) => {
                return (
                  <div key={lightCone.id} className={`character-details__item ${
                    index === 0 ? 'character-details__item--gold' : 
                    index === 1 ? 'character-details__item--silver' : 
                    index === 2 ? 'character-details__item--bronze' : ''
                  }`}>
                    <div className="character-details__item-image-container">
                      <Image
                        src={createImageUrl(lightCone.imageUrl)}
                        alt={lightCone.name}
                        width={80}
                        height={80}
                        className="character-details__item-image"
                        unoptimized={true}
                      />
                    </div>
                    <div className="character-details__item-info">
                      <h3 className="character-details__item-name">{lightCone.name}</h3>
                      <div className="character-details__item-rarity">
                        {[...Array(lightCone.rarity)].map((_, i) => (
                          <FaStar 
                            key={i} 
                            className={`character-details__star character-details__star--${lightCone.rarity === 5 ? 'gold' : 'purple'}`} 
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="character-details__section">
            <h2 className="character-details__section-title">Лучшие Реликвии</h2>
            <div className="character-details__items">
              {bestRelics.map((relic, index) => {
                return (
                  <div key={relic.id} className={`character-details__item ${
                    index === 0 ? 'character-details__item--gold' : 
                    index === 1 ? 'character-details__item--silver' : ''
                  }`}>
                    <div className="character-details__item-image-container">
                      <Image
                        src={createImageUrl(relic.imageUrl)}
                        alt={relic.name}
                        width={80}
                        height={80}
                        className="character-details__item-image"
                        unoptimized={true}
                      />
                    </div>
                    <div className="character-details__item-info">
                      <h3 className="character-details__item-name">{relic.name}</h3>
                      <span className="character-details__item-set">{relic.set} - {relic.piece}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="character-details__section">
            <h2 className="character-details__section-title">Рекомендуемые команды</h2>
            {recommendedTeams.map((team, index) => (
              <div key={index} className="character-details__team">
                <h3 className="character-details__team-name">{team.name}</h3>
                <div className="character-details__team-members">
                  {team.members.map((member) => {
                    return (
                      <div key={member.id} className="character-details__team-member">
                        <div className="character-details__team-member-image-container">
                          <Image
                            src={createImageUrl(member.imageUrl)}
                            alt={member.name}
                            width={60}
                            height={60}
                            className="character-details__team-member-image"
                            unoptimized={true}
                          />
                          <div className={`character-details__team-member-element character-details__element--${member.element.toLowerCase()}`}></div>
                        </div>
                        <span className="character-details__team-member-name">{member.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}; 
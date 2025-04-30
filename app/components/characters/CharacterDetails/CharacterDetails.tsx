'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { FaStar, FaTrophy, FaCrown, FaFire, FaExclamationTriangle, FaSkull, FaDungeon } from 'react-icons/fa';
import { getImageSources, getLightConeImageSources } from '@/app/utils/cloudinary';
import { elementTranslations, pathTranslations } from '@/app/utils/translations';
import { BackButton } from '@/app/character/[id]/BackButton';
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
  metaTags?: string[]; // Optional array of meta tags
  bestLightCones: LightCone[];
  bestRelics: Relic[];
  recommendedTeams: {
    name: string;
    members: TeamMember[];
  }[];
}

// Helper function to get tag icon and tooltip
const getTagInfo = (tag: string) => {
  const lowerTag = tag.toLowerCase();
  
  if (lowerTag === 'мета') {
    return {
      icon: <FaCrown />,
      iconType: 'react-icon',
      tooltip: 'Персонаж хорошо закрывающий все режимы, он определенно нужен вашему аккаунту'
    };
  }
  if (lowerTag === 'зал забвения') {
    return {
      iconPath: 'images/other/fh',
      iconType: 'image',
      tooltip: 'Этот персонаж хорош в режиме "Зал забвения"'
    };
  }
  if (lowerTag === 'чистый вымысел') {
    return {
      iconPath: 'images/other/pf',
      iconType: 'image',
      tooltip: 'Этот персонаж хорош в режиме "Чистый вымысел"'
    };
  }
  if (lowerTag === 'иллюзия конца') {
    return {
      iconPath: 'images/other/as',
      iconType: 'image',
      tooltip: 'Этот персонаж хорош в режиме "Иллюзия конца"'
    };
  }
  if (lowerTag === 'устаревший/слабый персонаж') {
    return {
      icon: <FaSkull />,
      iconType: 'react-icon',
      tooltip: 'Не рекомендую'
    };
  }
  
  // Default fallback
  return {
    icon: null,
    iconType: 'react-icon',
    tooltip: ''
  };
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
  id,
  name,
  element,
  path,
  rarity,
  imageUrl,
  description,
  metaTags = [], // Default to empty array if not provided
  bestLightCones,
  bestRelics,
  recommendedTeams,
}: CharacterDetailsProps) => {
  // State for active tooltip
  const [activeTooltip, setActiveTooltip] = useState<number | null>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  
  // Handle clicks outside of tooltip to close them on mobile
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (tooltipRef.current && !tooltipRef.current.contains(event.target as Node)) {
        setActiveTooltip(null);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Перевод элемента и пути
  const translatedElement = elementTranslations[element] || element;
  const translatedPath = pathTranslations[path] || path;
  
  // Определяем цвет звезд в зависимости от редкости
  const starColor = rarity === 5 ? 'gold' : 'purple';
  
  // Получаем изображение пути
  const pathImages = getImageSources(`images/paths/${path.toLowerCase()}`);
  
  // Получаем изображение элемента
  const elementImages = getImageSources(`images/elements/${element.toLowerCase()}`);
  
  // Toggle tooltip handler
  const toggleTooltip = (index: number) => {
    if (activeTooltip === index) {
      setActiveTooltip(null);
    } else {
      setActiveTooltip(index);
    }
  };
  
  return (
    <div className="character-details">
      <div className="character-details__header">
        <div className="character-details__header-content">
          <BackButton className="character-details__back-button" />
          <h1 className="character-details__name">{name}</h1>
          {metaTags && metaTags.length > 0 && (
            <div className="character-details__meta-tags" ref={tooltipRef}>
              {metaTags.map((tag, index) => {
                const tagInfo = getTagInfo(tag);
                return (
                  <div 
                    key={index} 
                    className="character-details__meta-tag-container"
                    onClick={() => toggleTooltip(index)}
                    onMouseEnter={() => window.innerWidth > 768 && setActiveTooltip(index)}
                    onMouseLeave={() => window.innerWidth > 768 && setActiveTooltip(null)}
                  >
                    <span className="character-details__meta-tag">
                      {tagInfo.iconType === 'react-icon' ? (
                        tagInfo.icon && <span className="character-details__meta-tag-icon">{tagInfo.icon}</span>
                      ) : (
                        tagInfo.iconPath && (
                          <span className="character-details__meta-tag-icon">
                            <picture>
                              <source 
                                srcSet={getImageSources(tagInfo.iconPath).avif} 
                                type="image/avif" 
                              />
                              <source 
                                srcSet={getImageSources(tagInfo.iconPath).webp} 
                                type="image/webp" 
                              />
                              <img 
                                src={getImageSources(tagInfo.iconPath).png} 
                                alt=""
                                className="character-details__meta-tag-icon-image"
                                width={16}
                                height={16}
                              />
                            </picture>
                          </span>
                        )
                      )}
                      {tag}
                    </span>
                    {activeTooltip === index && tagInfo.tooltip && (
                      <div className="character-details__meta-tag-tooltip">
                        {tagInfo.tooltip}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
          <div className="character-details__meta">
            <div className={`character-details__element-container`}>
              <picture>
                <source srcSet={elementImages.avif} type="image/avif" />
                <source srcSet={elementImages.webp} type="image/webp" />
                <img 
                  src={elementImages.png} 
                  alt={translatedElement}
                  className="character-details__element-image"
                  width={24}
                  height={24}
                />
              </picture>
              <span className={`character-details__element character-details__element--${element.toLowerCase()}`}>
                {translatedElement}
              </span>
            </div>
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
                // Используем специальную функцию для изображений конусов света
                const lightConeImages = getLightConeImageSources(lightCone.id);
                
                return (
                  <Link 
                    href={`/light-cone/${lightCone.id}?ref=character&characterId=${id}`} 
                    key={lightCone.id} 
                    className={`character-details__item ${
                      index === 0 ? 'character-details__item--gold' : 
                      index === 1 ? 'character-details__item--silver' : 
                      index === 2 ? 'character-details__item--bronze' : ''
                    }`}
                  >
                    <div className="character-details__item-image-container">
                      <picture>
                        <source srcSet={lightConeImages.avif} type="image/avif" />
                        <source srcSet={lightConeImages.webp} type="image/webp" />
                        <img 
                          src={lightConeImages.png} 
                          alt={lightCone.name}
                          width={80}
                          height={80}
                          className="character-details__item-image"
                        />
                      </picture>
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
                  </Link>
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
                    // Get element image for team member
                    const memberElementImages = getImageSources(`images/elements/${member.element.toLowerCase()}`);
                    
                    return (
                      <Link 
                        href={`/character/${member.id}`}
                        key={member.id} 
                        className="character-details__team-member"
                      >
                        <div className="character-details__team-member-image-container">
                          <Image
                            src={createImageUrl(member.imageUrl)}
                            alt={member.name}
                            width={60}
                            height={60}
                            className="character-details__team-member-image"
                            unoptimized={true}
                          />
                          <div className="character-details__team-member-element-container">
                            <img 
                              src={memberElementImages.avif} 
                              alt={elementTranslations[member.element] || member.element}
                              className="character-details__team-member-element-image"
                              width={20}
                              height={20}
                            />
                          </div>
                        </div>
                        <span className="character-details__team-member-name">{member.name}</span>
                      </Link>
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
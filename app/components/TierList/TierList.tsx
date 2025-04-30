'use client';

import { useRouter } from 'next/navigation';
import { tierListData, TierRank } from '@/app/data/tierList';
import { getImageSources } from '@/app/utils/cloudinary';
import './TierList.scss';
import { FaFire, FaHeartbeat, FaShieldAlt } from 'react-icons/fa';

const TIER_ORDER: TierRank[] = ['SS', 'S+', 'S', 'A', 'B', 'C', 'D'];

export const TierList = () => {
  const router = useRouter();

  const getCharactersByRole = (role: 'damage' | 'support' | 'sustain') => {
    return tierListData.filter(char => char.role === role);
  };

  const getCharactersByTier = (characters: typeof tierListData, tier: TierRank) => {
    return characters.filter(char => char.tier === tier);
  };

  const handleCharacterClick = (characterId: string) => {
    router.push(`/character/${characterId}?ref=tierlist`);
  };

  return (
    <div className="tier-list">
      <div className="tier-list__grid">
        <div className="tier-list__header">
          <div className="tier-list__empty-cell"></div>
          <div className="tier-list__column-header">
            <span className="column-header-icon"><FaFire /></span>
            Дамагеры/Сап Дамагеры
          </div>
          <div className="tier-list__column-header">
            <span className="column-header-icon"><FaHeartbeat /></span>
            Саппорты
          </div>
          <div className="tier-list__column-header">
            <span className="column-header-icon"><FaShieldAlt /></span>
            Сустейнеры
          </div>
        </div>
        
        {TIER_ORDER.map(tier => (
          <div key={tier} className="tier-row">
            <div className="tier-label">{tier}</div>
            
            {/* Damage Dealers Column */}
            <div className="tier-column">
              <div className="tier-characters">
                {getCharactersByTier(getCharactersByRole('damage'), tier).map(character => {
                  const imagePath = `charactersic/${character.id}_ic`;
                  const imageSources = getImageSources(imagePath);
                  
                  return (
                    <div
                      key={character.id}
                      className="character-icon"
                      onClick={() => handleCharacterClick(character.id)}
                    >
                      <picture>
                        <source srcSet={imageSources.avif} type="image/avif" />
                        <source srcSet={imageSources.webp} type="image/webp" />
                        <img
                          src={imageSources.png}
                          alt={character.name}
                          title={character.name}
                          onError={(e) => {
                            console.error(`Failed to load image for ${character.id}`);
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      </picture>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Supports Column */}
            <div className="tier-column">
              <div className="tier-characters">
                {getCharactersByTier(getCharactersByRole('support'), tier).map(character => {
                  const imagePath = `charactersic/${character.id}_ic`;
                  const imageSources = getImageSources(imagePath);
                  
                  return (
                    <div
                      key={character.id}
                      className="character-icon"
                      onClick={() => handleCharacterClick(character.id)}
                    >
                      <picture>
                        <source srcSet={imageSources.avif} type="image/avif" />
                        <source srcSet={imageSources.webp} type="image/webp" />
                        <img
                          src={imageSources.png}
                          alt={character.name}
                          title={character.name}
                          onError={(e) => {
                            console.error(`Failed to load image for ${character.id}`);
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      </picture>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Healers Column */}
            <div className="tier-column">
              <div className="tier-characters">
                {getCharactersByTier(getCharactersByRole('sustain'), tier).map(character => {
                  const imagePath = `charactersic/${character.id}_ic`;
                  const imageSources = getImageSources(imagePath);
                  
                  return (
                    <div
                      key={character.id}
                      className="character-icon"
                      onClick={() => handleCharacterClick(character.id)}
                    >
                      <picture>
                        <source srcSet={imageSources.avif} type="image/avif" />
                        <source srcSet={imageSources.webp} type="image/webp" />
                        <img
                          src={imageSources.png}
                          alt={character.name}
                          title={character.name}
                          onError={(e) => {
                            console.error(`Failed to load image for ${character.id}`);
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      </picture>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}; 
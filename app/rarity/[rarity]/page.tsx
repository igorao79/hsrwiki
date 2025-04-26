'use client';

import { useParams } from 'next/navigation';
import { useState, useMemo } from 'react';
import { CharacterCard } from '../../components/CharacterCard/CharacterCard';
import { Header } from '../../components/Header/Header';
import { FaSearch, FaStar } from 'react-icons/fa';
import { characters } from '../../data/fiveStarCharacters';

export default function RarityPage() {
  const params = useParams();
  const rarity = parseInt(params.rarity as string, 10);
  
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredCharacters = useMemo(() => {
    const filteredByRarity = characters.filter(char => char.rarity === rarity);
    
    if (!searchQuery.trim()) {
      return filteredByRarity;
    }
    
    const query = searchQuery.toLowerCase().trim();
    return filteredByRarity.filter(char => 
      char.name.toLowerCase().includes(query) || 
      char.element.toLowerCase().includes(query) || 
      char.path.toLowerCase().includes(query)
    );
  }, [rarity, searchQuery]);
  
  // Группируем персонажей по патчам и сортируем патчи в порядке убывания
  const groupedCharacters = useMemo(() => {
    const groups: Record<string, typeof characters> = {};
    
    filteredCharacters.forEach(char => {
      if (!groups[char.patch]) {
        groups[char.patch] = [];
      }
      groups[char.patch].push(char);
    });
    
    // Преобразуем объект в массив и сортируем по патчам в обратном порядке
    return Object.entries(groups)
      .sort(([patchA], [patchB]) => {
        const [majorA, minorA] = patchA.split('.').map(Number);
        const [majorB, minorB] = patchB.split('.').map(Number);
        
        if (majorA !== majorB) {
          return majorB - majorA; // Сначала сортируем по мажорной версии в обратном порядке
        }
        return minorB - minorA; // Затем по минорной версии в обратном порядке
      });
  }, [filteredCharacters]);
  
  const starIcon = rarity === 5 
    ? <FaStar className="rarity-star rarity-star--gold" /> 
    : <FaStar className="rarity-star rarity-star--purple" />;
  
  return (
    <>
      <Header />
      <div className="container">
        <section className="home-page">
          <h1 className="home-page__title">
            <span className="rarity-title">
              {rarity} <span className="rarity-title__star">{starIcon}</span> Персонажи
            </span>
          </h1>
          <p className="home-page__description">
            {rarity === 5 
              ? 'Просмотр всех 5-звёздочных персонажей Honkai: Star Rail' 
              : 'Просмотр всех 4-звёздочных персонажей Honkai: Star Rail'}
          </p>
          
          <div className="search-block">
            <div className="search-container">
              <input
                type="text"
                className="search-input"
                placeholder="Поиск персонажей..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <FaSearch className="search-icon" />
            </div>
          </div>
          
          {filteredCharacters.length > 0 ? (
            <div className="patch-container">
              {groupedCharacters.map(([patch, chars]) => (
                <div key={patch} className="patch-section">
                  <h2 className="patch-title">Версия {patch}</h2>
                  <div className="grid">
                    {chars.map((character) => (
                      <CharacterCard
                        key={character.id}
                        id={character.id}
                        name={character.name}
                        element={character.element}
                        path={character.path}
                        rarity={character.rarity}
                        imageUrl={character.imageUrl}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="home-page__empty">
              <p>Персонажи не найдены. Попробуйте изменить запрос поиска.</p>
            </div>
          )}
        </section>
      </div>
    </>
  );
} 
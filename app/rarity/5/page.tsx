'use client';

import { CharacterCard } from '../../components/CharacterCard/CharacterCard';
import { Header } from '../../components/Header/Header';
import { characters } from '../../data/fiveStarCharacters';
import { useState, useMemo } from 'react';
import { FaSearch } from 'react-icons/fa';

export default function FiveStarPage() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredCharacters = useMemo(() => {
    if (!searchQuery.trim()) {
      return characters;
    }
    
    const query = searchQuery.toLowerCase().trim();
    return characters.filter(char => 
      char.name.toLowerCase().includes(query) || 
      char.element.toLowerCase().includes(query) || 
      char.path.toLowerCase().includes(query)
    );
  }, [searchQuery]);
  
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
  
  return (
    <>
      <Header />
      <div className="container">
        <div className="page">
          <h1 className="page__title">5-звездочные персонажи</h1>
          <p className="page__description">
            Список всех доступных 5-звездочных персонажей в Honkai: Star Rail
          </p>
          
          <div className="search-block">
            <div className="search-container">
              <input
                type="text"
                className="search-input"
                placeholder="Поиск 5★ персонажей..."
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
        </div>
      </div>
    </>
  );
}
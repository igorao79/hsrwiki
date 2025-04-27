'use client';

import { useState, useMemo } from 'react';
import { CharacterCard } from '../components/CharacterCard/CharacterCard';
import { Header } from '../components/Header/Header';
import { FaSearch } from 'react-icons/fa';
import { characters } from '../data/fiveStarCharacters';
import { fourStarCharacters } from '../data/fourStarCharacters';
import { getImageSources } from '@/app/utils/cloudinary';
import './page.scss';

// Список всех элементов
const elements = ['Physical', 'Fire', 'Ice', 'Lightning', 'Wind', 'Quantum', 'Imaginary'];

// Список всех путей
const paths = ['Destruction', 'Hunt', 'Erudition', 'Harmony', 'Nihility', 'Preservation', 'Abundance', 'Remembrance'];

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
  'Abundance': 'Изобилие',
  'Remembrance': 'Память'
};

// Список стандартных 5-звездочных персонажей
const standardFiveStarIds = ['himeko', 'welt', 'bronya', 'gepard', 'clara', 'bailu', 'yanqing'];

// Список персонажей-первопроходцев
const trailblazerIds = ['trailblazer_destruction', 'trailblazer_preservation', 'stelle', 'caelus'];

export default function CharactersPage() {
  // Общие состояния фильтров
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedElements, setSelectedElements] = useState<string[]>([]);
  const [selectedPaths, setSelectedPaths] = useState<string[]>([]);
  const [showFourStar, setShowFourStar] = useState(true);
  const [showStandard, setShowStandard] = useState(true);
  const [showEvent, setShowEvent] = useState(true);
  const [showTrailblazer, setShowTrailblazer] = useState(true);
  
  // Объединяем все персонажи
  const allCharacters = useMemo(() => {
    const combined = [...characters];
    if (showFourStar) {
      combined.push(...fourStarCharacters);
    }
    return combined;
  }, [showFourStar]);
  
  // Функция для определения категории персонажа
  const getCharacterCategory = (id: string, rarity: number) => {
    // Проверяем, является ли персонаж первопроходцем
    if (trailblazerIds.includes(id) || id.includes('trailblazer')) {
      return 'trailblazer';
    }
    
    // Проверяем, является ли персонаж 4-звездочным
    if (rarity === 4) {
      return 'fourStar';
    }
    
    // Проверяем, является ли персонаж стандартным 5-звездочным
    if (standardFiveStarIds.includes(id)) {
      return 'standard';
    }
    
    // Все остальные 5-звездочные - ивентовые
    return 'event';
  };
  
  // Применяем все фильтры
  const filteredCharacters = useMemo(() => {
    return allCharacters.filter(char => {
      // Фильтр по имени
      if (searchQuery && !char.name.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }
      
      // Фильтр по элементам
      if (selectedElements.length > 0 && !selectedElements.includes(char.element)) {
        return false;
      }
      
      // Фильтр по путям
      if (selectedPaths.length > 0 && !selectedPaths.includes(char.path)) {
        return false;
      }
      
      // Определяем категорию персонажа
      const category = getCharacterCategory(char.id, char.rarity);
      
      // Применяем фильтры по категориям
      if (category === 'trailblazer' && !showTrailblazer) {
        return false;
      }
      
      if (category === 'fourStar' && !showFourStar) {
        return false;
      }
      
      if (category === 'standard' && !showStandard) {
        return false;
      }
      
      if (category === 'event' && !showEvent) {
        return false;
      }
      
      return true;
    });
  }, [allCharacters, searchQuery, selectedElements, selectedPaths, showStandard, showEvent, showTrailblazer, showFourStar]);
  
  // Группируем персонажей по патчам и сортируем патчи в порядке убывания
  const groupedCharacters = useMemo(() => {
    const groups: Record<string, typeof filteredCharacters> = {};
    
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
  
  // Обработчики для фильтров
  const toggleElement = (element: string) => {
    setSelectedElements(prev => 
      prev.includes(element) 
        ? prev.filter(e => e !== element) 
        : [...prev, element]
    );
  };
  
  const togglePath = (path: string) => {
    setSelectedPaths(prev => 
      prev.includes(path) 
        ? prev.filter(p => p !== path) 
        : [...prev, path]
    );
  };
  
  return (
    <>
      <Header />
      <div className="container">
        <section className="characters-page">
          <h1 className="characters-page__title">Персонажи HSR</h1>
          
          <div className="characters-page__filters">
            {/* Поисковая строка */}
            <div className="search-container">
              <div className="search-input-wrapper">
                <FaSearch className="search-icon" />
                <input
                  type="text"
                  className="search-input"
                  placeholder="Поиск по имени..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            
            {/* Фильтры по путям */}
            <div className="filter-section">
              <div className="filter-row">
                {paths.map(path => {
                  const pathImages = getImageSources(`images/paths/${path.toLowerCase()}`);
                  const isSelected = selectedPaths.includes(path);
                  
                  return (
                    <button 
                      key={path}
                      className={`filter-button ${isSelected ? 'filter-button--active' : ''}`}
                      onClick={() => togglePath(path)}
                      title={pathTranslations[path]}
                    >
                      <div className="filter-icon-container">
                        <picture>
                          <source srcSet={pathImages.avif} type="image/avif" />
                          <source srcSet={pathImages.webp} type="image/webp" />
                          <img 
                            src={pathImages.png} 
                            alt={pathTranslations[path]}
                            className="filter-icon"
                            width={30}
                            height={30}
                          />
                        </picture>
                      </div>
                    </button>
                  );
                })}
              </div>
              
              {/* Фильтры по элементам */}
              <div className="filter-row">
                {elements.map(element => {
                  const elementImages = getImageSources(`images/elements/${element.toLowerCase()}`);
                  const isSelected = selectedElements.includes(element);
                  
                  return (
                    <button 
                      key={element}
                      className={`filter-button ${isSelected ? 'filter-button--active' : ''}`}
                      onClick={() => toggleElement(element)}
                      title={elementTranslations[element]}
                    >
                      <div className="filter-icon-container">
                        <picture>
                          <source srcSet={elementImages.avif} type="image/avif" />
                          <source srcSet={elementImages.webp} type="image/webp" />
                          <img 
                            src={elementImages.png} 
                            alt={elementTranslations[element]}
                            className="filter-icon"
                            width={30}
                            height={30}
                          />
                        </picture>
                      </div>
                    </button>
                  );
                })}
              </div>
              
              {/* Кнопки фильтров */}
              <div className="filter-toggles">
                <button 
                  className={`filter-toggle ${showFourStar ? 'filter-toggle--active' : ''}`}
                  onClick={() => setShowFourStar(!showFourStar)}
                >
                  4★ Персонажи
                </button>
                <button 
                  className={`filter-toggle ${showStandard ? 'filter-toggle--active' : ''}`}
                  onClick={() => setShowStandard(!showStandard)}
                >
                  Стандартные
                </button>
                <button 
                  className={`filter-toggle ${showEvent ? 'filter-toggle--active' : ''}`}
                  onClick={() => setShowEvent(!showEvent)}
                >
                  Ивентовые
                </button>
                <button 
                  className={`filter-toggle ${showTrailblazer ? 'filter-toggle--active' : ''}`}
                  onClick={() => setShowTrailblazer(!showTrailblazer)}
                >
                  Первопроходец
                </button>
              </div>
            </div>
          </div>
          
          {/* Результаты */}
          {filteredCharacters.length > 0 ? (
            <div className="patch-container">
              {groupedCharacters.map(([patch, chars]) => (
                <div key={patch} className="patch-section">
                  <h2 className="patch-title">Версия {patch}</h2>
                  <div className="characters-grid">
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
            <div className="characters-page__empty">
              <p>Персонажи не найдены. Попробуйте изменить фильтры.</p>
            </div>
          )}
        </section>
      </div>
    </>
  );
} 
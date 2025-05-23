'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Header } from './components/Header/Header';
import { characters } from './data/characters/fiveStarCharacters';
import { fourStarCharacters } from './data/characters/fourStarCharacters';
import { getImageSources } from './utils/cloudinary';
import './page.scss';

const updateLog = [
  {
    date: '27.04.2025',
    version: '1.0',
    changes: [
      'Запуск сайта',
      'Добавлены картинки всех персонажей',
    ]
  }
];

const devTeam = [
  { name: 'igorao79', role: 'Разработчик, Редактор' },
  { name: 'lesya', role: 'Редактор' },
];

export default function Home() {
  const [randomCharacter, setRandomCharacter] = useState<any>(null);
  const [characterImages, setCharacterImages] = useState({ avif: '', webp: '', png: '' });
  const [lightConesImage, setLightConesImage] = useState({ avif: '', webp: '', png: '' });
  const [tierListImage, setTierListImage] = useState({ avif: '', webp: '', png: '' });
  
  // Выбираем случайного персонажа при загрузке страницы
  useEffect(() => {
    const allCharacters = [...characters, ...fourStarCharacters];
    const randomIndex = Math.floor(Math.random() * allCharacters.length);
    setRandomCharacter(allCharacters[randomIndex]);
    
    // Загружаем оптимизированные изображения
    if (allCharacters[randomIndex]) {
      setCharacterImages(getImageSources(`images/characters/${allCharacters[randomIndex].id}_splash`));
    }
    
    // Загружаем оптимизированные изображения для других карточек
    setLightConesImage(getImageSources(`images/background/light-cones`));
    setTierListImage(getImageSources(`images/background/tier-list`));
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        <section className="home-page">
          <h1 className="home-page__title">HSR Вики</h1>
          <p className="home-page__description">
            Просмотр всех персонажей, конусов и тир-листов Honkai: Star Rail
          </p>
          
          <div className="home-layout">
            <div className="home-content">
              <div className="home-grid">
                <Link href="/characters" className="home-grid__card">
                  <div className="home-grid__image-container">
                    {randomCharacter && (
                      <picture>
                        <source srcSet={characterImages.avif} type="image/avif" />
                        <source srcSet={characterImages.webp} type="image/webp" />
                        <img 
                          src={characterImages.png} 
                          alt="Character background" 
                          className="home-grid__image"
                          width={400}
                          height={280}
                          loading="eager"
                        />
                      </picture>
                    )}
                  </div>
                  <div className="home-grid__content">
                    <h2 className="home-grid__title">Персонажи</h2>
                    <p className="home-grid__text">
                      Просмотр всех персонажей, их характеристик и рекомендаций по экипировке
                    </p>
                  </div>
                </Link>
                
                <Link href="/light-cones" className="home-grid__card">
                  <div className="home-grid__image-container">
                    <picture>
                      <source srcSet={lightConesImage.avif} type="image/avif" />
                      <source srcSet={lightConesImage.webp} type="image/webp" />
                      <img 
                        src={lightConesImage.png} 
                        alt="Light cones background" 
                        className="home-grid__image"
                        width={400}
                        height={280}
                        loading="eager"
                      />
                    </picture>
                  </div>
                  <div className="home-grid__content">
                    <h2 className="home-grid__title">Световые конусы</h2>
                    <p className="home-grid__text">
                      Информация о световых конусах и их совместимости с персонажами
                    </p>
                  </div>
                </Link>
                
                <Link href="/tier-list" className="home-grid__card">
                  <div className="home-grid__image-container">
                    <picture>
                      <source srcSet={tierListImage.avif} type="image/avif" />
                      <source srcSet={tierListImage.webp} type="image/webp" />
                      <img 
                        src={tierListImage.png} 
                        alt="Tier list background" 
                        className="home-grid__image"
                        width={400}
                        height={280}
                        loading="eager"
                      />
                    </picture>
                  </div>
                  <div className="home-grid__content">
                    <h2 className="home-grid__title">Тир-лист</h2>
                    <p className="home-grid__text">
                      Актуальный рейтинг персонажей и их эффективности в различных ситуациях
                    </p>
                  </div>
                </Link>
              </div>
              
              <div className="dev-team">
                <h3 className="dev-team__title">Команда разработчиков</h3>
                <div className="dev-team__members">
                  {devTeam.map((member, index) => (
                    <div key={index} className="dev-team__member">
                      <h4 className="dev-team__name">{member.name}</h4>
                      <p className="dev-team__role">{member.role}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="update-log">
              <h3 className="update-log__title">Обновления</h3>
              <div className="update-log__content">
                {updateLog.map((update, index) => (
                  <div key={index} className="update-log__entry">
                    <div className="update-log__header">
                      <span className="update-log__date">{update.date}</span>
                      <span className="update-log__version">v{update.version}</span>
                    </div>
                    <ul className="update-log__changes">
                      {update.changes.map((change, changeIndex) => (
                        <li key={changeIndex} className="update-log__change">{change}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

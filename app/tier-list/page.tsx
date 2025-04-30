'use client';

import { Header } from '../components/Header/Header';
import { TierList } from '../components/TierList/TierList';
import './page.scss';
import { useState } from 'react';
import { 
  FaExclamationTriangle, 
  FaStar, 
  FaRegStar, 
  FaListAlt,
  FaBook,
  FaFire,
  FaUserShield,
  FaHeartbeat,
  FaShieldAlt,
  FaMedal,
  FaChartLine,
  FaTrophy
} from 'react-icons/fa';

export default function TierListPage() {
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);
  const [isTerminologyOpen, setIsTerminologyOpen] = useState(false);

  const toggleDisclaimer = () => {
    setIsDisclaimerOpen(!isDisclaimerOpen);
  };

  const toggleTerminology = () => {
    setIsTerminologyOpen(!isTerminologyOpen);
  };

  const getCurrentDate = () => {
    const date = new Date();
    const day = date.getDate();
    const year = date.getFullYear();
    
    // Месяцы в родительном падеже
    const months = [
      'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
      'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
    ];
    const month = months[date.getMonth()];
    
    return `${day} ${month} ${year}`;
  };


  return (
    <>
      <Header />
      <div className="container">
        <section className="tier-list-page">
          <h1 className="tier-list-page__title">Тир-лист HSR</h1>
          <p className="tier-list-page__description">
            Актуальный тир-лист персонажей Honkai: Star Rail на {getCurrentDate()}
          </p>
          
          <div className="tier-list-page__disclaimer-container">
            <button 
              className="tier-list-page__disclaimer-toggle" 
              onClick={toggleDisclaimer}
            >
              {isDisclaimerOpen ? 'Скрыть дисклеймер' : 'Показать дисклеймер'}
            </button>
            <div className={`tier-list-page__disclaimer ${isDisclaimerOpen ? 'open' : ''}`}>
              <div className="tier-list-page__disclaimer-items">
                <p><span><FaExclamationTriangle /></span> Важно: данный тир-лист отражает личное мнение автора и может не совпадать с вашим.</p>
                <p><span><FaStar /></span> Все легендарные персонажи оцениваются на Э0 без сигнатурного конуса.</p>
                <p><span><FaRegStar /></span> Все 4х-звёздочные персонажи рассматриваются на Э6.</p>
                <p><span><FaTrophy /></span> Порядок персонажей внутри каждой категории не имеет значения — если персонаж находится в тире A, это значит, что он соответствует уровню A, независимо от позиции в списке.</p>
                <p><span><FaListAlt /></span> Сап ДД и ДД находятся в одной категории, так как большинство Сап ДД могут вносить хороший урон</p>
              </div>
            </div>
            
            <button 
              className="tier-list-page__terminology-toggle" 
              onClick={toggleTerminology}
            >
              {isTerminologyOpen ? 'Скрыть терминологию' : 'Терминология'}
            </button>
            <div className={`tier-list-page__terminology ${isTerminologyOpen ? 'open' : ''}`}>
              <div className="tier-list-page__terminology-section">
                <h3><span><FaBook /></span> Роли персонажей</h3>
                <div className="tier-list-page__terminology-items">
                  <p><span><FaFire /></span> <strong>Дамагеры</strong> — главный источник урона в команде, требующий грамотную поддержку для полного раскрытия потенциала.</p>
                  <p><span><FaUserShield /></span> <strong>Сап-дамагеры</strong> — вторичный источник урона, который может давать баффы команде и сам наносить хороший урон.</p>
                  <p><span><FaHeartbeat /></span> <strong>Саппорты</strong> — персонажи поддержки, баффающие всю команду или конкретного персонажа в ней.</p>
                  <p><span><FaShieldAlt /></span> <strong>Сустейнеры</strong> — персонажи, обеспечивающие выживаемость команды через отхилл либо защиту. Также могут наносить неплохой урон.</p>
                </div>
              </div>
              
              <div className="tier-list-page__terminology-section">
                <h3><span><FaMedal /></span> Рейтинг тиров</h3>
                <div className="tier-list-page__terminology-items">
                  <p><span><FaChartLine /></span> <strong>SS</strong> — сильнейшие персонажи, задающие мету и способные закрывать весь контент с минимальными вложениями.</p>
                  <p><span><FaChartLine /></span> <strong>S+</strong> — очень сильные и актуальные герои, вышедшие относительно недавно, легко справляются с любыми режимами.</p>
                  <p><span><FaChartLine /></span> <strong>S</strong> — сильные персонажи, постепенно отходящие на второй план; не всегда универсальны и могут испытывать трудности в отдельных режимах.</p>
                  <p><span><FaChartLine /></span> <strong>A</strong> — хорошие персонажи, но без вложений и грамотно собранной команды могут возникнуть сложности с прохождением эндгейм контента.</p>
                  <p><span><FaChartLine /></span> <strong>B</strong> — средние персонажи, которые без серьёзных вложений оказываются практически бесполезны.</p>
                  <p><span><FaChartLine /></span> <strong>C</strong> — слабые персонажи, которые могут быть полезными на начале игры.</p>
                  <p><span><FaChartLine /></span> <strong>D</strong> — бесполезные персонажи, их лучше не трогать.</p>
                </div>
              </div>
            </div>
          </div>
          
          <TierList />
        </section>
      </div>
    </>
  );
} 
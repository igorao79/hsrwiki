'use client';

import { Header } from '../components/Header/Header';
import './page.scss';

export default function TierListPage() {
  return (
    <>
      <Header />
      <div className="container">
        <section className="tier-list-page">
          <h1 className="tier-list-page__title">Тир-лист HSR</h1>
          <p className="tier-list-page__description">
            Здесь будет размещен актуальный тир-лист персонажей Honkai: Star Rail.
          </p>
          
          <div className="tier-list-placeholder">
            <p>Страница находится в разработке</p>
          </div>
        </section>
      </div>
    </>
  );
} 
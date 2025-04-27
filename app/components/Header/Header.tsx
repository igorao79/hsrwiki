'use client';

import Link from 'next/link';
import './Header.scss';

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <Link href="/" className="header__logo">
            HSR Wiki
          </Link>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item">
                <Link href="/characters" className="header__nav-link">
                  <span className="header__nav-text">Персонажи</span>
                </Link>
              </li>
              <li className="header__nav-item">
                <Link href="/light-cones" className="header__nav-link">
                  <span className="header__nav-text">Конусы</span>
                </Link>
              </li>
              <li className="header__nav-item">
                <Link href="/tier-list" className="header__nav-link">
                  <span className="header__nav-text">Тир-лист</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}; 
'use client';

import Link from 'next/link';
import { FaStar } from 'react-icons/fa';
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
                <Link href="/rarity/5" className="header__nav-link header__nav-link--star-5">
                  <FaStar className="header__star-icon header__star-icon--gold" />
                  <span className="header__nav-text">5 Персонажи</span>
                </Link>
              </li>
              <li className="header__nav-item">
                <Link href="/rarity/4" className="header__nav-link header__nav-link--star-4">
                  <FaStar className="header__star-icon header__star-icon--purple" />
                  <span className="header__nav-text">4 Персонажи</span>
                </Link>
              </li>
              <li className="header__nav-item">
                <Link href="/light-cones" className="header__nav-link header__nav-link--star-4">
                  <FaStar className="header__star-icon header__star-icon--purple" />
                  <span className="header__nav-text">Конусы</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}; 
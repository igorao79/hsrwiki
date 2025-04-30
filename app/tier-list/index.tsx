'use client';

import { TierList } from '../../components/TierList/TierList';
import { Header } from '../../components/Header/Header';
import './page.scss';

export default function TierListPage() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="tier-list-wrapper">
          <TierList />
        </div>
      </div>
    </>
  );
} 
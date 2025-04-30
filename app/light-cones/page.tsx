'use client';

import { fiveStarLightCones, fourStarLightCones, threeStarLightCones } from '@/app/data/lcs/lightCones';
import LightConeList from '@/app/components/lcs/LightConeList';
import { Header } from '@/app/components/Header/Header';
import styles from './page.module.scss';

export default function LightConesPage() {
  return (
    <div className={styles.page}>
      <Header />
      
      <div className="container">
        <div className={styles.content}>
          <h1 className={styles.pageTitle}>Световые конусы</h1>
          
          <div className={styles.description}>
            <p>
              Световые конусы — это экипировка, которая повышает характеристики персонажей и дает им уникальные способности. 
              Каждый световой конус соответствует определенному пути и имеет разную редкость.
            </p>
          </div>
          
          <div className={styles.lists}>
            <LightConeList
              lightCones={fiveStarLightCones}
              title="5★ Световые конусы"
            />
            
            <LightConeList
              lightCones={fourStarLightCones}
              title="4★ Световые конусы"
            />
            
            <LightConeList
              lightCones={threeStarLightCones}
              title="3★ Световые конусы"
            />
          </div>
        </div>
      </div>
    </div>
  );
} 
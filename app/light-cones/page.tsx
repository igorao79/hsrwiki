'use client';

import { fiveStarLightCones, fourStarLightCones, threeStarLightCones } from '@/app/data/lightCones';
import LightConeList from '@/app/components/LightConeList';
import { Header } from '@/app/components/Header/Header';
import styles from './page.module.scss';

export default function LightConesPage() {
  return (
    <div className={styles.page}>
      <Header />
      
      <div className="container">
        <div className={styles.content}>
          <h1 className={styles.pageTitle}>Конусы Света</h1>
          
          <div className={styles.description}>
            <p>
              Конусы света — это экипировка, которая повышает характеристики персонажей и дает им уникальные способности. 
              Каждый конус света соответствует определенному пути и имеет разную редкость.
            </p>
          </div>
          
          <div className={styles.lists}>
            <LightConeList
              lightCones={fiveStarLightCones}
              title="5★ Конусы Света"
            />
            
            <LightConeList
              lightCones={fourStarLightCones}
              title="4★ Конусы Света"
            />
            
            <LightConeList
              lightCones={threeStarLightCones}
              title="3★ Конусы Света"
            />
          </div>
        </div>
      </div>
    </div>
  );
} 
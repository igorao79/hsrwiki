export interface LightCone {
  id: string;
  name: string;
  rarity: 3 | 4 | 5;
  path: string;
  imageUrl: string;
  patch: string;
  baseStats: {
    hp: number;
    atk: number;
    def: number;
  };
  maxStats: {
    hp: number;
    atk: number;
    def: number;
  };
  skill: {
    name: string;
    description: string;
    superimposition: {
      level: number;
      effect: string;
    }[];
  };
  upgradeMaterials: {
    stage: number;
    materials: {
      name: string;
      count: number;
      imageUrl: string;
    }[];
  }[];
  recommendedCharacters: {
    id: string;
    name: string;
    imageUrl: string;
    element: string;
  }[];
}

import { fiveStarLightConesData } from './fiveStarLightCones';
import { fourStarLightConesData } from './fourStarLightCones';
import { threeStarLightConesData } from './threeStarLightCones';

export const fiveStarLightCones: LightCone[] = fiveStarLightConesData;
export const fourStarLightCones: LightCone[] = fourStarLightConesData;
export const threeStarLightCones: LightCone[] = threeStarLightConesData; 
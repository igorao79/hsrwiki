import { LightCone } from './lightCones';

export const fourStarLightConesData: LightCone[] = [
  {
    id: "eyes-of-the-prey",
    name: "Взгляд хищника",
    rarity: 4,
    path: "Nihility",
    imageUrl: "/images/lc/eyes-of-the-prey",
    patch: "1.0",
    baseStats: {
      hp: 846,
      atk: 476,
      def: 330
    },
    maxStats: {
      hp: 1588,
      atk: 952,
      def: 661
    },
    skill: {
      name: "Обостренные инстинкты",
      description: "Увеличивает эффективность накладываемых эффектов на 20% и увеличивает скорость на 4%.",
      superimposition: [
        {
          level: 1,
          effect: "Эффективность накладываемых эффектов +20%, скорость +4%"
        },
        {
          level: 2,
          effect: "Эффективность накладываемых эффектов +25%, скорость +5%"
        },
        {
          level: 3,
          effect: "Эффективность накладываемых эффектов +30%, скорость +6%"
        },
        {
          level: 4,
          effect: "Эффективность накладываемых эффектов +35%, скорость +7%"
        },
        {
          level: 5,
          effect: "Эффективность накладываемых эффектов +40%, скорость +8%"
        }
      ]
    },
    upgradeMaterials: [
      {
        stage: 1,
        materials: [
          {
            name: "Разрушенное Ядро",
            count: 3,
            imageUrl: "/images/materials/broken-core"
          },
          {
            name: "Кристаллы Пустоты",
            count: 8,
            imageUrl: "/images/materials/void-crystals"
          }
        ]
      },
      {
        stage: 2,
        materials: [
          {
            name: "Искаженное Ядро",
            count: 6,
            imageUrl: "/images/materials/distorted-core"
          },
          {
            name: "Осколки Пустоты",
            count: 12,
            imageUrl: "/images/materials/void-fragments"
          }
        ]
      }
    ],
    recommendedCharacters: [
      {
        id: "silver-wolf",
        name: "Серебряный Волк",
        imageUrl: "/images/characters/silver-wolf",
        element: "Quantum"
      },
      {
        id: "pela",
        name: "Пела",
        imageUrl: "/images/characters/pela",
        element: "Ice"
      }
    ]
  }
]; 
import { LightCone } from './lightCones';

export const threeStarLightConesData: LightCone[] = [
  // 1.0
  {
    id: "databank",
    name: "База данных",
    rarity: 3,
    path: "Erudition",
    imageUrl: "/images/lc/databank",
    patch: "1.0",
    baseStats: {
      hp: 635,
      atk: 397,
      def: 264
    },
    maxStats: {
      hp: 1159,
      atk: 793,
      def: 529
    },
    skill: {
      name: "Невидимое касание",
      description: "Увеличивает эффективность накладываемых эффектов на 16%.",
      superimposition: [
        {
          level: 1,
          effect: "Эффективность накладываемых эффектов +16%"
        },
        {
          level: 2,
          effect: "Эффективность накладываемых эффектов +20%"
        },
        {
          level: 3,
          effect: "Эффективность накладываемых эффектов +24%"
        },
        {
          level: 4,
          effect: "Эффективность накладываемых эффектов +28%"
        },
        {
          level: 5,
          effect: "Эффективность накладываемых эффектов +32%"
        }
      ]
    },
    upgradeMaterials: [
      {
        stage: 1,
        materials: [
          {
            name: "Разрушенное Ядро",
            count: 2,
            imageUrl: "/images/materials/broken-core"
          },
          {
            name: "Кристаллы Пустоты",
            count: 4,
            imageUrl: "/images/materials/void-crystals"
          }
        ]
      },
      {
        stage: 2,
        materials: [
          {
            name: "Искаженное Ядро",
            count: 4,
            imageUrl: "/images/materials/distorted-core"
          },
          {
            name: "Осколки Пустоты",
            count: 8,
            imageUrl: "/images/materials/void-fragments"
          }
        ]
      }
    ],
    recommendedCharacters: [
      {
        id: "sampo",
        name: "Сампо",
        imageUrl: "/images/characters/sampo",
        element: "Wind"
      },
      {
        id: "kafka",
        name: "Кафка",
        imageUrl: "/images/characters/kafka",
        element: "Lightning"
      }
    ]
  },
  {
    id: "passkey",
    name: "Ключ от всех дверей",
    rarity: 3,
    path: "Erudition",
    imageUrl: "/images/lc/passkey",
    patch: "1.0",
    baseStats: {
      hp: 635,
      atk: 397,
      def: 264
    },
    maxStats: {
      hp: 1159,
      atk: 793,
      def: 529
    },
    skill: {
      name: "Невидимое касание",
      description: "Увеличивает эффективность накладываемых эффектов на 16%.",
      superimposition: [
        {
          level: 1,
          effect: "Эффективность накладываемых эффектов +16%"
        },
        {
          level: 2,
          effect: "Эффективность накладываемых эффектов +20%"
        },
        {
          level: 3,
          effect: "Эффективность накладываемых эффектов +24%"
        },
        {
          level: 4,
          effect: "Эффективность накладываемых эффектов +28%"
        },
        {
          level: 5,
          effect: "Эффективность накладываемых эффектов +32%"
        }
      ]
    },
    upgradeMaterials: [
      {
        stage: 1,
        materials: [
          {
            name: "Разрушенное Ядро",
            count: 2,
            imageUrl: "/images/materials/broken-core"
          },
          {
            name: "Кристаллы Пустоты",
            count: 4,
            imageUrl: "/images/materials/void-crystals"
          }
        ]
      },
      {
        stage: 2,
        materials: [
          {
            name: "Искаженное Ядро",
            count: 4,
            imageUrl: "/images/materials/distorted-core"
          },
          {
            name: "Осколки Пустоты",
            count: 8,
            imageUrl: "/images/materials/void-fragments"
          }
        ]
      }
    ],
    recommendedCharacters: [
      {
        id: "sampo",
        name: "Сампо",
        imageUrl: "/images/characters/sampo",
        element: "Wind"
      },
      {
        id: "kafka",
        name: "Кафка",
        imageUrl: "/images/characters/kafka",
        element: "Lightning"
      }
    ]
  },
  {
    id: "dartingarrow",
    name: "Выпущенная стрела",
    rarity: 3,
    path: "Hunt",
    imageUrl: "/images/lc/dartingarrow",
    patch: "1.0",
    baseStats: {
      hp: 635,
      atk: 397,
      def: 264
    },
    maxStats: {
      hp: 1159,
      atk: 793,
      def: 529
    },
    skill: {
      name: "Невидимое касание",
      description: "Увеличивает эффективность накладываемых эффектов на 16%.",
      superimposition: [
        {
          level: 1,
          effect: "Эффективность накладываемых эффектов +16%"
        },
        {
          level: 2,
          effect: "Эффективность накладываемых эффектов +20%"
        },
        {
          level: 3,
          effect: "Эффективность накладываемых эффектов +24%"
        },
        {
          level: 4,
          effect: "Эффективность накладываемых эффектов +28%"
        },
        {
          level: 5,
          effect: "Эффективность накладываемых эффектов +32%"
        }
      ]
    },
    upgradeMaterials: [
      {
        stage: 1,
        materials: [
          {
            name: "Разрушенное Ядро",
            count: 2,
            imageUrl: "/images/materials/broken-core"
          },
          {
            name: "Кристаллы Пустоты",
            count: 4,
            imageUrl: "/images/materials/void-crystals"
          }
        ]
      },
      {
        stage: 2,
        materials: [
          {
            name: "Искаженное Ядро",
            count: 4,
            imageUrl: "/images/materials/distorted-core"
          },
          {
            name: "Осколки Пустоты",
            count: 8,
            imageUrl: "/images/materials/void-fragments"
          }
        ]
      }
    ],
    recommendedCharacters: [
      {
        id: "sampo",
        name: "Сампо",
        imageUrl: "/images/characters/sampo",
        element: "Wind"
      },
      {
        id: "kafka",
        name: "Кафка",
        imageUrl: "/images/characters/kafka",
        element: "Lightning"
      }
    ]
  },
  {
    id: "pioneering",
    name: "Новые горизонты",
    rarity: 3,
    path: "Preservation",
    imageUrl: "/images/lc/pioneering",
    patch: "1.0",
    baseStats: {
      hp: 635,
      atk: 397,
      def: 264
    },
    maxStats: {
      hp: 1159,
      atk: 793,
      def: 529
    },
    skill: {
      name: "Невидимое касание",
      description: "Увеличивает эффективность накладываемых эффектов на 16%.",
      superimposition: [
        {
          level: 1,
          effect: "Эффективность накладываемых эффектов +16%"
        },
        {
          level: 2,
          effect: "Эффективность накладываемых эффектов +20%"
        },
        {
          level: 3,
          effect: "Эффективность накладываемых эффектов +24%"
        },
        {
          level: 4,
          effect: "Эффективность накладываемых эффектов +28%"
        },
        {
          level: 5,
          effect: "Эффективность накладываемых эффектов +32%"
        }
      ]
    },
    upgradeMaterials: [
      {
        stage: 1,
        materials: [
          {
            name: "Разрушенное Ядро",
            count: 2,
            imageUrl: "/images/materials/broken-core"
          },
          {
            name: "Кристаллы Пустоты",
            count: 4,
            imageUrl: "/images/materials/void-crystals"
          }
        ]
      },
      {
        stage: 2,
        materials: [
          {
            name: "Искаженное Ядро",
            count: 4,
            imageUrl: "/images/materials/distorted-core"
          },
          {
            name: "Осколки Пустоты",
            count: 8,
            imageUrl: "/images/materials/void-fragments"
          }
        ]
      }
    ],
    recommendedCharacters: [
      {
        id: "sampo",
        name: "Сампо",
        imageUrl: "/images/characters/sampo",
        element: "Wind"
      },
      {
        id: "kafka",
        name: "Кафка",
        imageUrl: "/images/characters/kafka",
        element: "Lightning"
      }
    ]
  },

]; 
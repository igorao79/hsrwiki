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

export const fiveStarLightCones: LightCone[] = [
  {
    id: "in-the-night",
    name: "В ночи",
    rarity: 5,
    path: "Hunt",
    imageUrl: "/images/lc/inthenight",
    patch: "1.0",
    baseStats: {
      hp: 952,
      atk: 582,
      def: 396
    },
    maxStats: {
      hp: 2286,
      atk: 1307,
      def: 793
    },
    skill: {
      name: "Призрак ночи",
      description: "Повышает УРН на 20%. После атаки носителя получает наложение Скрытность на 1 ход. Под Скрытностью следующая атака носителя получает +24% УРН и игнорирует 20% ЗЩТ цели.",
      superimposition: [
        {
          level: 1,
          effect: "Базовые эффекты"
        },
        {
          level: 2,
          effect: "УРН +22%, под Скрытностью следующая атака УРН +26%, игнор ЗЩТ 20%"
        },
        {
          level: 3,
          effect: "УРН +24%, под Скрытностью следующая атака УРН +28%, игнор ЗЩТ 20%"
        },
        {
          level: 4,
          effect: "УРН +26%, под Скрытностью следующая атака УРН +30%, игнор ЗЩТ 20%"
        },
        {
          level: 5,
          effect: "УРН +28%, под Скрытностью следующая атака УРН +32%, игнор ЗЩТ 20%"
        }
      ]
    },
    upgradeMaterials: [
      {
        stage: 1,
        materials: [
          {
            name: "Разрушенное Ядро",
            count: 5,
            imageUrl: "/images/materials/broken-core"
          },
          {
            name: "Кристаллы Пустоты",
            count: 10,
            imageUrl: "/images/materials/void-crystals"
          }
        ]
      },
      {
        stage: 2,
        materials: [
          {
            name: "Искаженное Ядро",
            count: 10,
            imageUrl: "/images/materials/distorted-core"
          },
          {
            name: "Осколки Пустоты",
            count: 15,
            imageUrl: "/images/materials/void-fragments"
          }
        ]
      }
    ],
    recommendedCharacters: [
      {
        id: "seele",
        name: "Зеле",
        imageUrl: "/images/characters/seele",
        element: "Quantum"
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
    id: "cruising-in-the-stellar-sea",
    name: "Путешествие по звёздному морю",
    rarity: 5,
    path: "Erudition",
    imageUrl: "/images/light-cones/cruising-in-the-stellar-sea",
    patch: "1.0",
    baseStats: {
      hp: 1058,
      atk: 635,
      def: 343
    },
    maxStats: {
      hp: 2455,
      atk: 1429,
      def: 661
    },
    skill: {
      name: "Морская жизнь",
      description: "Увеличивает УРН ультой на 24%. При использовании ульты восстанавливает 5 энергии. Эффект срабатывает 1 раз за ульту.",
      superimposition: [
        {
          level: 1,
          effect: "Базовые эффекты"
        },
        {
          level: 2,
          effect: "УРН ульты +28%, восстановление 5 энергии"
        },
        {
          level: 3,
          effect: "УРН ульты +32%, восстановление 5 энергии"
        },
        {
          level: 4,
          effect: "УРН ульты +36%, восстановление 5 энергии"
        },
        {
          level: 5,
          effect: "УРН ульты +40%, восстановление 6 энергии"
        }
      ]
    },
    upgradeMaterials: [
      {
        stage: 1,
        materials: [
          {
            name: "Чертеж Ядра",
            count: 5,
            imageUrl: "/images/materials/core-blueprint"
          },
          {
            name: "Кристаллы Пустоты",
            count: 10,
            imageUrl: "/images/materials/void-crystals"
          }
        ]
      },
      {
        stage: 2,
        materials: [
          {
            name: "Схема Ядра",
            count: 10,
            imageUrl: "/images/materials/core-schematic"
          },
          {
            name: "Осколки Пустоты",
            count: 15,
            imageUrl: "/images/materials/void-fragments"
          }
        ]
      }
    ],
    recommendedCharacters: [
      {
        id: "himeko",
        name: "Химеко",
        imageUrl: "/images/characters/himeko",
        element: "Fire"
      },
      {
        id: "serval",
        name: "Сервал",
        imageUrl: "/images/characters/serval",
        element: "Lightning"
      }
    ]
  }
];

export const fourStarLightCones: LightCone[] = [
  {
    id: "eyes-of-the-prey",
    name: "Взгляд хищника",
    rarity: 4,
    path: "Nihility",
    imageUrl: "/images/light-cones/eyes-of-the-prey",
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

export const threeStarLightCones: LightCone[] = [
  {
    id: "hidden-shadow",
    name: "Скрытая тень",
    rarity: 3,
    path: "Nihility",
    imageUrl: "/images/light-cones/hidden-shadow",
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
  }
]; 
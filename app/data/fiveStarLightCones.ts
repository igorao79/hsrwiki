import { LightCone } from './lightCones';

export const fiveStarLightConesData: LightCone[] = [
  {
    id: "inthenight",
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
    imageUrl: "/images/lc/cruising-in-the-stellar-sea",
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
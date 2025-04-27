export interface Character {
  id: string;
  name: string;
  element: string;
  path: string;
  rarity: number;
  imageUrl: string;
  description: string;
  patch: string;
  bestLightCones: {
    id: string;
    name: string;
    imageUrl: string;
    rarity: number;
  }[];
  bestRelics: {
    id: string;
    name: string;
    imageUrl: string;
    set: string;
    piece: string;
  }[];
  recommendedTeams: {
    name: string;
    members: {
      id: string;
      name: string;
      imageUrl: string;
      element: string;
    }[];
  }[];
}

export const characters: Character[] = [
  // 1.0
  {
    id: "seele",
    name: "Зеле",
    element: "Quantum",
    path: "Hunt",
    rarity: 5,
    patch: "1.0",
    imageUrl: "/images/characters/seele",
    description: "Умелый ассасин из Лесного пожара, двигающийся подобно призраку. Изящная и элегантная снаружи, но решительная и эффективная в своих миссиях.",
    bestLightCones: [
      {
        id: "inthenight",
        name: "В ночи",
        imageUrl: "/images/lc/inthenight",
        rarity: 5
      },
      {
        id: "lc-2",
        name: "Путешествие по звёздному морю",
        imageUrl: "/images/light-cones/cruising-in-the-stellar-sea",
        rarity: 5
      },
      {
        id: "lc-3",
        name: "Сон мертвеца",
        imageUrl: "/images/light-cones/sleep-like-the-dead",
        rarity: 4
      },
      {
        id: "lc-4",
        name: "Остаётся лишь тишина",
        imageUrl: "/images/light-cones/only-silence-remains",
        rarity: 4
      },
      {
        id: "lc-5",
        name: "Фехтование",
        imageUrl: "/images/light-cones/swordplay",
        rarity: 3
      }
    ],
    bestRelics: [
      {
        id: "rel-1",
        name: "Охотник глетчерного леса",
        imageUrl: "/images/relics/hunter-of-glacial-forest",
        set: "Охотник глетчерного леса",
        piece: "4 предмета"
      },
      {
        id: "rel-2",
        name: "Гений блистательных звёзд",
        imageUrl: "/images/relics/genius-of-brilliant-stars",
        set: "Гений блистательных звёзд",
        piece: "2 предмета"
      },
      {
        id: "rel-3",
        name: "Орёл сумеречной черты",
        imageUrl: "/images/relics/eagle-of-twilight-line",
        set: "Орёл сумеречной черты",
        piece: "2 предмета"
      },
      {
        id: "rel-4",
        name: "Мушкетёр дикого пшеничного поля",
        imageUrl: "/images/relics/musketeer-of-wild-wheat",
        set: "Мушкетёр дикого пшеничного поля",
        piece: "2 предмета"
      }
    ],
    recommendedTeams: [
      {
        name: "Квантовый взрыв",
        members: [
          {
            id: "seele",
            name: "Зеле",
            imageUrl: "/images/characters/seele",
            element: "Quantum"
          },
          {
            id: "bronya",
            name: "Броня",
            imageUrl: "/images/characters/bronya",
            element: "Wind"
          },
          {
            id: "fu-xuan",
            name: "Фу Сюань",
            imageUrl: "/images/characters/fu-xuan",
            element: "Quantum"
          },
          {
            id: "pela",
            name: "Пела",
            imageUrl: "/images/characters/pela",
            element: "Ice"
          }
        ]
      },
      {
        name: "Добивающая атака",
        members: [
          {
            id: "seele",
            name: "Зеле",
            imageUrl: "/images/characters/seele",
            element: "Quantum"
          },
          {
            id: "silver-wolf",
            name: "Серебряный Волк",
            imageUrl: "/images/characters/silver-wolf",
            element: "Quantum"
          },
          {
            id: "tingyun",
            name: "Тинъюнь",
            imageUrl: "/images/characters/tingyun",
            element: "Lightning"
          },
          {
            id: "gepard",
            name: "Гепард",
            imageUrl: "/images/characters/gepard",
            element: "Ice"
          }
        ]
      }
    ]
  },
  {
    id: "jing-yuan",
    name: "Цзин Юань",
    element: "Lightning",
    path: "Erudition",
    rarity: 5,
    patch: "1.0",
    imageUrl: "/images/characters/jing-yuan",
    description: "Глава Сян Чжоу. Спокойный и расчетливый лидер, обладающий могущественной молниеносной силой. В бою его сопровождает верный компаньон - громовой дракон Линчуань.",
    bestLightCones: [
      {
        id: "lc-jy1",
        name: "Ночь ворона",
        imageUrl: "/images/light-cones/night-of-the-crow",
        rarity: 5
      },
      {
        id: "lc-jy2",
        name: "Планы перед рассветом",
        imageUrl: "/images/light-cones/before-dawn-plans",
        rarity: 4
      }
    ],
    bestRelics: [
      {
        id: "rel-jy1",
        name: "Виноградная лоза и громовые стихии",
        imageUrl: "/images/relics/vine-and-thunder-elements",
        set: "Виноградная лоза и громовые стихии",
        piece: "4 предмета"
      },
      {
        id: "rel-jy2",
        name: "Небесный дифференциатор",
        imageUrl: "/images/relics/celestial-differentiator",
        set: "Небесный дифференциатор",
        piece: "2 предмета"
      }
    ],
    recommendedTeams: [
      {
        name: "Молниеносная атака",
        members: [
          {
            id: "jing-yuan",
            name: "Цзин Юань",
            imageUrl: "/images/characters/jing-yuan",
            element: "Lightning"
          },
          {
            id: "tingyun",
            name: "Тинъюнь",
            imageUrl: "/images/characters/tingyun",
            element: "Lightning"
          },
          {
            id: "bronya",
            name: "Броня",
            imageUrl: "/images/characters/bronya",
            element: "Wind"
          },
          {
            id: "luocha",
            name: "Лоча",
            imageUrl: "/images/characters/luocha",
            element: "Imaginary"
          }
        ]
      }
    ]
  },
  {
    id: "trailblazersd",
    name: "Первопроходец",
    element: "Physical",
    path: "Destruction",
    rarity: 5,
    patch: "1.0",
    imageUrl: "/images/characters/stellancaelusd",
    description: "Глава Сян Чжоу. Спокойный и расчетливый лидер, обладающий могущественной молниеносной силой. В бою его сопровождает верный компаньон - громовой дракон Линчуань.",
    bestLightCones: [
      {
        id: "lc-jy1",
        name: "Ночь ворона",
        imageUrl: "/images/light-cones/night-of-the-crow",
        rarity: 5
      },
      {
        id: "lc-jy2",
        name: "Планы перед рассветом",
        imageUrl: "/images/light-cones/before-dawn-plans",
        rarity: 4
      }
    ],
    bestRelics: [
      {
        id: "rel-jy1",
        name: "Виноградная лоза и громовые стихии",
        imageUrl: "/images/relics/vine-and-thunder-elements",
        set: "Виноградная лоза и громовые стихии",
        piece: "4 предмета"
      },
      {
        id: "rel-jy2",
        name: "Небесный дифференциатор",
        imageUrl: "/images/relics/celestial-differentiator",
        set: "Небесный дифференциатор",
        piece: "2 предмета"
      }
    ],
    recommendedTeams: [
      {
        name: "Молниеносная атака",
        members: [
          {
            id: "jing-yuan",
            name: "Цзин Юань",
            imageUrl: "/images/characters/jing-yuan",
            element: "Lightning"
          },
          {
            id: "tingyun",
            name: "Тинъюнь",
            imageUrl: "/images/characters/tingyun",
            element: "Lightning"
          },
          {
            id: "bronya",
            name: "Броня",
            imageUrl: "/images/characters/bronya",
            element: "Wind"
          },
          {
            id: "luocha",
            name: "Лоча",
            imageUrl: "/images/characters/luocha",
            element: "Imaginary"
          }
        ]
      }
    ]
  },
  {
    id: "trailblazersp",
    name: "Первопроходец",
    element: "Fire",
    path: "Preservation",
    rarity: 5,
    patch: "1.0",
    imageUrl: "/images/characters/stellancaelusp",
    description: "Глава Сян Чжоу. Спокойный и расчетливый лидер, обладающий могущественной молниеносной силой. В бою его сопровождает верный компаньон - громовой дракон Линчуань.",
    bestLightCones: [
      {
        id: "lc-jy1",
        name: "Ночь ворона",
        imageUrl: "/images/light-cones/night-of-the-crow",
        rarity: 5
      },
      {
        id: "lc-jy2",
        name: "Планы перед рассветом",
        imageUrl: "/images/light-cones/before-dawn-plans",
        rarity: 4
      }
    ],
    bestRelics: [
      {
        id: "rel-jy1",
        name: "Виноградная лоза и громовые стихии",
        imageUrl: "/images/relics/vine-and-thunder-elements",
        set: "Виноградная лоза и громовые стихии",
        piece: "4 предмета"
      },
      {
        id: "rel-jy2",
        name: "Небесный дифференциатор",
        imageUrl: "/images/relics/celestial-differentiator",
        set: "Небесный дифференциатор",
        piece: "2 предмета"
      }
    ],
    recommendedTeams: [
      {
        name: "Молниеносная атака",
        members: [
          {
            id: "jing-yuan",
            name: "Цзин Юань",
            imageUrl: "/images/characters/jing-yuan",
            element: "Lightning"
          },
          {
            id: "tingyun",
            name: "Тинъюнь",
            imageUrl: "/images/characters/tingyun",
            element: "Lightning"
          },
          {
            id: "bronya",
            name: "Броня",
            imageUrl: "/images/characters/bronya",
            element: "Wind"
          },
          {
            id: "luocha",
            name: "Лоча",
            imageUrl: "/images/characters/luocha",
            element: "Imaginary"
          }
        ]
      }
    ]
  },
  {
    id: "himeko",
    name: "Химеко",
    element: "Fire",
    path: "Erudition",
    rarity: 5,
    patch: "1.0",
    imageUrl: "/images/characters/himeko",
    description: "Капитан корабля \"Астральный Экспресс\". Бывший ученый, посвятивший себя исследованию космоса и поиску новых знаний. Обладает огненной мощью и интеллектом.",
    bestLightCones: [
      {
        id: "lc-hm1",
        name: "Ночь ворона",
        imageUrl: "/images/light-cones/night-of-the-crow",
        rarity: 5
      },
      {
        id: "lc-hm2",
        name: "Сейчас самое время",
        imageUrl: "/images/light-cones/nows-the-time",
        rarity: 4
      }
    ],
    bestRelics: [
      {
        id: "rel-hm1",
        name: "Гений блистательных звёзд",
        imageUrl: "/images/relics/genius-of-brilliant-stars",
        set: "Гений блистательных звёзд",
        piece: "4 предмета"
      },
      {
        id: "rel-hm2",
        name: "Небесный дифференциатор",
        imageUrl: "/images/relics/celestial-differentiator",
        set: "Небесный дифференциатор",
        piece: "2 предмета"
      }
    ],
    recommendedTeams: [
      {
        name: "Огненный шторм",
        members: [
          {
            id: "himeko",
            name: "Химеко",
            imageUrl: "/images/characters/himeko",
            element: "Fire"
          },
          {
            id: "asta",
            name: "Аста",
            imageUrl: "/images/characters/asta",
            element: "Fire"
          },
          {
            id: "bronya",
            name: "Броня",
            imageUrl: "/images/characters/bronya",
            element: "Wind"
          },
          {
            id: "luocha",
            name: "Лоча",
            imageUrl: "/images/characters/luocha",
            element: "Imaginary"
          }
        ]
      }
    ]
  },
  {
    id: "welt",
    name: "Вельт",
    element: "Imaginary",
    path: "Nihility",
    rarity: 5,
    patch: "1.0",
    imageUrl: "/images/characters/welt",
    description: "Капитан корабля \"Астральный Экспресс\". Бывший ученый, посвятивший себя исследованию космоса и поиску новых знаний. Обладает огненной мощью и интеллектом.",
    bestLightCones: [
      {
        id: "lc-hm1",
        name: "Ночь ворона",
        imageUrl: "/images/light-cones/night-of-the-crow",
        rarity: 5
      },
      {
        id: "lc-hm2",
        name: "Сейчас самое время",
        imageUrl: "/images/light-cones/nows-the-time",
        rarity: 4
      }
    ],
    bestRelics: [
      {
        id: "rel-hm1",
        name: "Гений блистательных звёзд",
        imageUrl: "/images/relics/genius-of-brilliant-stars",
        set: "Гений блистательных звёзд",
        piece: "4 предмета"
      },
      {
        id: "rel-hm2",
        name: "Небесный дифференциатор",
        imageUrl: "/images/relics/celestial-differentiator",
        set: "Небесный дифференциатор",
        piece: "2 предмета"
      }
    ],
    recommendedTeams: [
      {
        name: "Огненный шторм",
        members: [
          {
            id: "himeko",
            name: "Химеко",
            imageUrl: "/images/characters/himeko",
            element: "Fire"
          },
          {
            id: "asta",
            name: "Аста",
            imageUrl: "/images/characters/asta",
            element: "Fire"
          },
          {
            id: "bronya",
            name: "Броня",
            imageUrl: "/images/characters/bronya",
            element: "Wind"
          },
          {
            id: "luocha",
            name: "Лоча",
            imageUrl: "/images/characters/luocha",
            element: "Imaginary"
          }
        ]
      }
    ]
  },
  {
    id: "bronya",
    name: "Броня",
    element: "Wind",
    path: "Harmony",
    rarity: 5,
    patch: "1.0",
    imageUrl: "/images/characters/bronya",
    description: "Верховный Хранитель Белобога и Предвестница. Руководит городом с непоколебимой решимостью и стратегическим мышлением, одновременно заботясь о своих подчиненных.",
    bestLightCones: [
      {
        id: "lc-br1",
        name: "Но сердце понимающее",
        imageUrl: "/images/light-cones/but-the-heart-understands",
        rarity: 5
      },
      {
        id: "lc-br2",
        name: "Множественные возможности",
        imageUrl: "/images/light-cones/multiple-possibilities",
        rarity: 4
      }
    ],
    bestRelics: [
      {
        id: "rel-br1",
        name: "Мессенджер зачищающего зла",
        imageUrl: "/images/relics/messenger-traversing-evil",
        set: "Мессенджер зачищающего зла",
        piece: "4 предмета"
      },
      {
        id: "rel-br2",
        name: "Полевой контроль",
        imageUrl: "/images/relics/field-control",
        set: "Полевой контроль",
        piece: "4 предмета"
      }
    ],
    recommendedTeams: [
      {
        name: "Идеальный баланс",
        members: [
          {
            id: "bronya",
            name: "Броня",
            imageUrl: "/images/characters/bronya",
            element: "Wind"
          },
          {
            id: "seele",
            name: "Зеле",
            imageUrl: "/images/characters/seele",
            element: "Quantum"
          },
          {
            id: "silver-wolf",
            name: "Серебряный Волк",
            imageUrl: "/images/characters/silver-wolf",
            element: "Quantum"
          },
          {
            id: "luocha",
            name: "Лоча",
            imageUrl: "/images/characters/luocha",
            element: "Imaginary"
          }
        ]
      }
    ]
  },
  {
    id: "gepard",
    name: "Гепард",
    element: "Ice",
    path: "Preservation",
    rarity: 5,
    patch: "1.0",
    imageUrl: "/images/characters/gepard",
    description: "Верховный Хранитель Белобога и Предвестница. Руководит городом с непоколебимой решимостью и стратегическим мышлением, одновременно заботясь о своих подчиненных.",
    bestLightCones: [
      {
        id: "lc-br1",
        name: "Но сердце понимающее",
        imageUrl: "/images/light-cones/but-the-heart-understands",
        rarity: 5
      },
      {
        id: "lc-br2",
        name: "Множественные возможности",
        imageUrl: "/images/light-cones/multiple-possibilities",
        rarity: 4
      }
    ],
    bestRelics: [
      {
        id: "rel-br1",
        name: "Мессенджер зачищающего зла",
        imageUrl: "/images/relics/messenger-traversing-evil",
        set: "Мессенджер зачищающего зла",
        piece: "4 предмета"
      },
      {
        id: "rel-br2",
        name: "Полевой контроль",
        imageUrl: "/images/relics/field-control",
        set: "Полевой контроль",
        piece: "4 предмета"
      }
    ],
    recommendedTeams: [
      {
        name: "Идеальный баланс",
        members: [
          {
            id: "bronya",
            name: "Броня",
            imageUrl: "/images/characters/bronya",
            element: "Wind"
          },
          {
            id: "seele",
            name: "Зеле",
            imageUrl: "/images/characters/seele",
            element: "Quantum"
          },
          {
            id: "silver-wolf",
            name: "Серебряный Волк",
            imageUrl: "/images/characters/silver-wolf",
            element: "Quantum"
          },
          {
            id: "luocha",
            name: "Лоча",
            imageUrl: "/images/characters/luocha",
            element: "Imaginary"
          }
        ]
      }
    ]
  },
  {
    id: "bailu",
    name: "Байлу",
    element: "Lightning",
    path: "Abundance",
    rarity: 5,
    patch: "1.0",
    imageUrl: "/images/characters/bailu",
    description: "Юная даосистка из Сяньчжоу. Обладает способностью исцелять и воскрешать членов команды с помощью молниеносной энергии и древних даосских практик.",
    bestLightCones: [
      {
        id: "lc-bl1",
        name: "Время, отпущенное на прощание",
        imageUrl: "/images/light-cones/time-waits-for-no-one",
        rarity: 5
      },
      {
        id: "lc-bl2",
        name: "Моменты бренности",
        imageUrl: "/images/light-cones/moments-of-transience",
        rarity: 4
      }
    ],
    bestRelics: [
      {
        id: "rel-bl1",
        name: "Пассивность Лонглевела",
        imageUrl: "/images/relics/longlevel-pasture",
        set: "Пассивность Лонглевела",
        piece: "4 предмета"
      },
      {
        id: "rel-bl2",
        name: "Мессенджер зачищающего зла",
        imageUrl: "/images/relics/messenger-traversing-evil",
        set: "Мессенджер зачищающего зла",
        piece: "4 предмета"
      }
    ],
    recommendedTeams: [
      {
        name: "Команда выживания",
        members: [
          {
            id: "bailu",
            name: "Байлу",
            imageUrl: "/images/characters/bailu",
            element: "Lightning"
          },
          {
            id: "blade",
            name: "Блэйд",
            imageUrl: "/images/characters/blade",
            element: "Wind"
          },
          {
            id: "fu-xuan",
            name: "Фу Сюань",
            imageUrl: "/images/characters/fu-xuan",
            element: "Quantum"
          },
          {
            id: "kafka",
            name: "Кафка",
            imageUrl: "/images/characters/kafka",
            element: "Lightning"
          }
        ]
      }
    ]
  },
  {
    id: "clara",
    name: "Клара",
    element: "Physical",
    path: "Destruction",
    rarity: 5,
    patch: "1.0",
    imageUrl: "/images/characters/clara",
    description: "Юная даосистка из Сяньчжоу. Обладает способностью исцелять и воскрешать членов команды с помощью молниеносной энергии и древних даосских практик.",
    bestLightCones: [
      {
        id: "lc-bl1",
        name: "Время, отпущенное на прощание",
        imageUrl: "/images/light-cones/time-waits-for-no-one",
        rarity: 5
      },
      {
        id: "lc-bl2",
        name: "Моменты бренности",
        imageUrl: "/images/light-cones/moments-of-transience",
        rarity: 4
      }
    ],
    bestRelics: [
      {
        id: "rel-bl1",
        name: "Пассивность Лонглевела",
        imageUrl: "/images/relics/longlevel-pasture",
        set: "Пассивность Лонглевела",
        piece: "4 предмета"
      },
      {
        id: "rel-bl2",
        name: "Мессенджер зачищающего зла",
        imageUrl: "/images/relics/messenger-traversing-evil",
        set: "Мессенджер зачищающего зла",
        piece: "4 предмета"
      }
    ],
    recommendedTeams: [
      {
        name: "Команда выживания",
        members: [
          {
            id: "bailu",
            name: "Байлу",
            imageUrl: "/images/characters/bailu",
            element: "Lightning"
          },
          {
            id: "blade",
            name: "Блэйд",
            imageUrl: "/images/characters/blade",
            element: "Wind"
          },
          {
            id: "fu-xuan",
            name: "Фу Сюань",
            imageUrl: "/images/characters/fu-xuan",
            element: "Quantum"
          },
          {
            id: "kafka",
            name: "Кафка",
            imageUrl: "/images/characters/kafka",
            element: "Lightning"
          }
        ]
      }
    ]
  },
  {
    id: "yanqing",
    name: "Яньцин",
    element: "Ice",
    path: "Hunt",
    rarity: 5,
    patch: "1.0",
    imageUrl: "/images/characters/yanqing",
    description: "Юная даосистка из Сяньчжоу. Обладает способностью исцелять и воскрешать членов команды с помощью молниеносной энергии и древних даосских практик.",
    bestLightCones: [
      {
        id: "lc-bl1",
        name: "Время, отпущенное на прощание",
        imageUrl: "/images/light-cones/time-waits-for-no-one",
        rarity: 5
      },
      {
        id: "lc-bl2",
        name: "Моменты бренности",
        imageUrl: "/images/light-cones/moments-of-transience",
        rarity: 4
      }
    ],
    bestRelics: [
      {
        id: "rel-bl1",
        name: "Пассивность Лонглевела",
        imageUrl: "/images/relics/longlevel-pasture",
        set: "Пассивность Лонглевела",
        piece: "4 предмета"
      },
      {
        id: "rel-bl2",
        name: "Мессенджер зачищающего зла",
        imageUrl: "/images/relics/messenger-traversing-evil",
        set: "Мессенджер зачищающего зла",
        piece: "4 предмета"
      }
    ],
    recommendedTeams: [
      {
        name: "Команда выживания",
        members: [
          {
            id: "bailu",
            name: "Байлу",
            imageUrl: "/images/characters/bailu",
            element: "Lightning"
          },
          {
            id: "blade",
            name: "Блэйд",
            imageUrl: "/images/characters/blade",
            element: "Wind"
          },
          {
            id: "fu-xuan",
            name: "Фу Сюань",
            imageUrl: "/images/characters/fu-xuan",
            element: "Quantum"
          },
          {
            id: "kafka",
            name: "Кафка",
            imageUrl: "/images/characters/kafka",
            element: "Lightning"
          }
        ]
      }
    ]
  },
  
  // 1.1
  {
    id: "silver-wolf",
    name: "Серебряный Волк",
    element: "Quantum",
    path: "Nihility",
    rarity: 5,
    patch: "1.1",
    imageUrl: "/images/characters/silver-wolf",
    description: "Таинственный хакер, работающий на Охотников за Стелларонами. Её навыки взлома позволяют не только проникать в компьютерные системы, но и ослаблять защиту противников.",
    bestLightCones: [
      {
        id: "lc-sw1",
        name: "В ночи",
        imageUrl: "/images/light-cones/in-the-night",
        rarity: 5
      },
      {
        id: "lc-sw2",
        name: "Нескончаемый дождь",
        imageUrl: "/images/light-cones/incessant-rain",
        rarity: 5
      },
      {
        id: "lc-sw3",
        name: "Взгляд хищника",
        imageUrl: "/images/light-cones/eyes-of-the-prey",
        rarity: 4
      }
    ],
    bestRelics: [
      {
        id: "rel-sw1",
        name: "Тюремщик миазматической опухоли",
        imageUrl: "/images/relics/prison-guard-of-miasmic-tumor",
        set: "Тюремщик миазматической опухоли",
        piece: "4 предмета"
      },
      {
        id: "rel-sw2",
        name: "Пан-Космическое коммерческое предприятие",
        imageUrl: "/images/relics/pan-cosmic-commercial-enterprise",
        set: "Пан-Космическое коммерческое предприятие",
        piece: "2 предмета"
      }
    ],
    recommendedTeams: [
      {
        name: "Квантовое превосходство",
        members: [
          {
            id: "silver-wolf",
            name: "Серебряный Волк",
            imageUrl: "/images/characters/silver-wolf",
            element: "Quantum"
          },
          {
            id: "seele",
            name: "Зеле",
            imageUrl: "/images/characters/seele",
            element: "Quantum"
          },
          {
            id: "bronya",
            name: "Броня",
            imageUrl: "/images/characters/bronya",
            element: "Wind"
          },
          {
            id: "luocha",
            name: "Лоча",
            imageUrl: "/images/characters/luocha",
            element: "Imaginary"
          }
        ]
      }
    ]
  },
  {
    id: "luocha",
    name: "Лоча",
    element: "Imaginary",
    path: "Abundance",
    rarity: 5,
    patch: "1.1",
    imageUrl: "/images/characters/luocha",
    description: "Таинственный хакер, работающий на Охотников за Стелларонами. Её навыки взлома позволяют не только проникать в компьютерные системы, но и ослаблять защиту противников.",
    bestLightCones: [
      {
        id: "lc-sw1",
        name: "В ночи",
        imageUrl: "/images/light-cones/in-the-night",
        rarity: 5
      },
      {
        id: "lc-sw2",
        name: "Нескончаемый дождь",
        imageUrl: "/images/light-cones/incessant-rain",
        rarity: 5
      },
      {
        id: "lc-sw3",
        name: "Взгляд хищника",
        imageUrl: "/images/light-cones/eyes-of-the-prey",
        rarity: 4
      }
    ],
    bestRelics: [
      {
        id: "rel-sw1",
        name: "Тюремщик миазматической опухоли",
        imageUrl: "/images/relics/prison-guard-of-miasmic-tumor",
        set: "Тюремщик миазматической опухоли",
        piece: "4 предмета"
      },
      {
        id: "rel-sw2",
        name: "Пан-Космическое коммерческое предприятие",
        imageUrl: "/images/relics/pan-cosmic-commercial-enterprise",
        set: "Пан-Космическое коммерческое предприятие",
        piece: "2 предмета"
      }
    ],
    recommendedTeams: [
      {
        name: "Квантовое превосходство",
        members: [
          {
            id: "silver-wolf",
            name: "Серебряный Волк",
            imageUrl: "/images/characters/silver-wolf",
            element: "Quantum"
          },
          {
            id: "seele",
            name: "Зеле",
            imageUrl: "/images/characters/seele",
            element: "Quantum"
          },
          {
            id: "bronya",
            name: "Броня",
            imageUrl: "/images/characters/bronya",
            element: "Wind"
          },
          {
            id: "luocha",
            name: "Лоча",
            imageUrl: "/images/characters/luocha",
            element: "Imaginary"
          }
        ]
      }
    ]
  },

  // 1.2
  {
    id: "blade",
    name: "Блэйд",
    element: "Wind",
    path: "Destruction",
    rarity: 5,
    patch: "1.2",
    imageUrl: "/images/characters/blade",
    description: "Мечник, который отдал своё тело Стеллерону в обмен на беспрецедентную силу. Сдержанный и собранный, он присоединяется к Охотникам за Стелларонами, чтобы найти лекарство от своего состояния.",
    bestLightCones: [
      {
        id: "lc-11",
        name: "Недостижимая сторона",
        imageUrl: "/images/light-cones/the-unreachable-side",
        rarity: 5
      },
      {
        id: "lc-12",
        name: "Тайная клятва",
        imageUrl: "/images/light-cones/a-secret-vow",
        rarity: 5
      },
      {
        id: "lc-13",
        name: "Кроты приветствуют",
        imageUrl: "/images/light-cones/the-moles-welcome-you",
        rarity: 4
      },
      {
        id: "lc-14",
        name: "Под синим небом",
        imageUrl: "/images/light-cones/under-the-blue-sky",
        rarity: 4
      },
      {
        id: "lc-15",
        name: "Рушащееся небо",
        imageUrl: "/images/light-cones/collapsing-sky",
        rarity: 3
      }
    ],
    bestRelics: [
      {
        id: "rel-9",
        name: "Мессье ночных сумерек",
        imageUrl: "/images/relics/messier-in-nights-dusk",
        set: "Мессье ночных сумерек",
        piece: "4 предмета"
      },
      {
        id: "rel-10",
        name: "Долгожитель",
        imageUrl: "/images/relics/longevous-disciple",
        set: "Долгожитель",
        piece: "4 предмета"
      },
      {
        id: "rel-11",
        name: "Небесный дифференциатор",
        imageUrl: "/images/relics/celestial-differentiator",
        set: "Небесный дифференциатор",
        piece: "2 предмета"
      },
      {
        id: "rel-12",
        name: "Мушкетёр дикого пшеничного поля",
        imageUrl: "/images/relics/musketeer-of-wild-wheat",
        set: "Мушкетёр дикого пшеничного поля",
        piece: "2 предмета"
      }
    ],
    recommendedTeams: [
      {
        name: "Выживание Блэйда",
        members: [
          {
            id: "blade",
            name: "Блэйд",
            imageUrl: "/images/characters/blade",
            element: "Wind"
          },
          {
            id: "fu-xuan",
            name: "Фу Сюань",
            imageUrl: "/images/characters/fu-xuan",
            element: "Quantum"
          },
          {
            id: "bailu",
            name: "Байлу",
            imageUrl: "/images/characters/bailu",
            element: "Lightning"
          },
          {
            id: "natasha",
            name: "Наташа",
            imageUrl: "/images/characters/natasha",
            element: "Physical"
          }
        ]
      },
      {
        name: "Ветреное доминирование",
        members: [
          {
            id: "blade",
            name: "Блэйд",
            imageUrl: "/images/characters/blade",
            element: "Wind"
          },
          {
            id: "bronya",
            name: "Броня",
            imageUrl: "/images/characters/bronya",
            element: "Wind"
          },
          {
            id: "asta",
            name: "Аста",
            imageUrl: "/images/characters/asta",
            element: "Fire"
          },
          {
            id: "lynx",
            name: "Линкс",
            imageUrl: "/images/characters/lynx",
            element: "Quantum"
          }
        ]
      }
    ]
  }, 
  {
    id: "kafka",
    name: "Кафка",
    element: "Lightning",
    path: "Nihility",
    rarity: 5,
    patch: "1.2",
    imageUrl: "/images/characters/kafka",
    description: "Лидер Охотников за Стелларонами. Искусна в шпионаже и сборе разведданных, она - загадочная женщина с ясной целью: найти и собрать Стеллароны.",
    bestLightCones: [
      {
        id: "lc-6",
        name: "Стану собственным мечом",
        imageUrl: "/images/light-cones/i-shall-be-my-own-sword",
        rarity: 5
      },
      {
        id: "lc-7",
        name: "Нескончаемый дождь",
        imageUrl: "/images/light-cones/incessant-rain",
        rarity: 5
      },
      {
        id: "lc-8",
        name: "Взгляд хищника",
        imageUrl: "/images/light-cones/eyes-of-the-prey",
        rarity: 4
      },
      {
        id: "lc-9",
        name: "Доброй ночи и сладких снов",
        imageUrl: "/images/light-cones/good-night-and-sleep-well",
        rarity: 4
      },
      {
        id: "lc-10",
        name: "Скрытая тень",
        imageUrl: "/images/light-cones/hidden-shadow",
        rarity: 3
      }
    ],
    bestRelics: [
      {
        id: "rel-5",
        name: "Тюремщик миазматической опухоли",
        imageUrl: "/images/relics/prison-guard-of-miasmic-tumor",
        set: "Тюремщик миазматической опухоли",
        piece: "4 предмета"
      },
      {
        id: "rel-6",
        name: "Гений блистательных звёзд",
        imageUrl: "/images/relics/genius-of-brilliant-stars",
        set: "Гений блистательных звёзд",
        piece: "2 предмета"
      },
      {
        id: "rel-7",
        name: "Пан-Космическое коммерческое предприятие",
        imageUrl: "/images/relics/pan-cosmic-commercial-enterprise",
        set: "Пан-Космическое коммерческое предприятие",
        piece: "2 предмета"
      },
      {
        id: "rel-8",
        name: "Передовая линия небосвода: Гламот",
        imageUrl: "/images/relics/firmament-frontline-glamoth",
        set: "Передовая линия небосвода: Гламот",
        piece: "2 предмета"
      }
    ],
    recommendedTeams: [
      {
        name: "DoT доминирование",
        members: [
          {
            id: "kafka",
            name: "Кафка",
            imageUrl: "/images/characters/kafka",
            element: "Lightning"
          },
          {
            id: "sampo",
            name: "Сампо",
            imageUrl: "/images/characters/sampo",
            element: "Wind"
          },
          {
            id: "luka",
            name: "Лука",
            imageUrl: "/images/characters/luka",
            element: "Physical"
          },
          {
            id: "luocha",
            name: "Лоча",
            imageUrl: "/images/characters/luocha",
            element: "Imaginary"
          }
        ]
      },
      {
        name: "Молниеносный DoT",
        members: [
          {
            id: "kafka",
            name: "Кафка",
            imageUrl: "/images/characters/kafka",
            element: "Lightning"
          },
          {
            id: "silver-wolf",
            name: "Серебряный Волк",
            imageUrl: "/images/characters/silver-wolf",
            element: "Quantum"
          },
          {
            id: "guinaifen",
            name: "Гуйнайфэнь",
            imageUrl: "/images/characters/guinaifen",
            element: "Fire"
          },
          {
            id: "bailu",
            name: "Байлу",
            imageUrl: "/images/characters/bailu",
            element: "Lightning"
          }
        ]
      }
    ]
  },
  
  // 1.3
  {
    id: "dhil",
    name: "Дань Хэн: Пожиратель Луны",
    element: "Imaginary",
    path: "Destruction",
    rarity: 5,
    patch: "1.3",
    imageUrl: "/images/characters/dhil",
    description: "Главная прорицательница Сяньчжоу Луофу. Её способность предвидеть будущее позволяет ей и её команде избегать опасностей и выдерживать сильнейшие атаки противников.",
    bestLightCones: [
      {
        id: "lc-fx1",
        name: "Она уже не часть твоего мира",
        imageUrl: "/images/light-cones/shes-no-longer-part-of-your-world",
        rarity: 5
      },
      {
        id: "lc-fx2",
        name: "День и ночь",
        imageUrl: "/images/light-cones/day-and-night",
        rarity: 4
      }
    ],
    bestRelics: [
      {
        id: "rel-fx1",
        name: "Стальной стражник",
        imageUrl: "/images/relics/iron-guard",
        set: "Стальной стражник",
        piece: "4 предмета"
      },
      {
        id: "rel-fx2",
        name: "Наследие Хуаньлун",
        imageUrl: "/images/relics/huanlong-legacy",
        set: "Наследие Хуаньлун",
        piece: "4 предмета"
      }
    ],
    recommendedTeams: [
      {
        name: "Несокрушимая защита",
        members: [
          {
            id: "fu-xuan",
            name: "Фу Сюань",
            imageUrl: "/images/characters/fu-xuan",
            element: "Quantum"
          },
          {
            id: "blade",
            name: "Блэйд",
            imageUrl: "/images/characters/blade",
            element: "Wind"
          },
          {
            id: "bailu",
            name: "Байлу",
            imageUrl: "/images/characters/bailu",
            element: "Lightning"
          },
          {
            id: "kafka",
            name: "Кафка",
            imageUrl: "/images/characters/kafka",
            element: "Lightning"
          }
        ]
      }
    ]
  },
  {
    id: "fu-xuan",
    name: "Фу Сюань",
    element: "Quantum",
    path: "Preservation",
    rarity: 5,
    patch: "1.3",
    imageUrl: "/images/characters/fu-xuan",
    description: "Главная прорицательница Сяньчжоу Луофу. Её способность предвидеть будущее позволяет ей и её команде избегать опасностей и выдерживать сильнейшие атаки противников.",
    bestLightCones: [
      {
        id: "lc-fx1",
        name: "Она уже не часть твоего мира",
        imageUrl: "/images/light-cones/shes-no-longer-part-of-your-world",
        rarity: 5
      },
      {
        id: "lc-fx2",
        name: "День и ночь",
        imageUrl: "/images/light-cones/day-and-night",
        rarity: 4
      }
    ],
    bestRelics: [
      {
        id: "rel-fx1",
        name: "Стальной стражник",
        imageUrl: "/images/relics/iron-guard",
        set: "Стальной стражник",
        piece: "4 предмета"
      },
      {
        id: "rel-fx2",
        name: "Наследие Хуаньлун",
        imageUrl: "/images/relics/huanlong-legacy",
        set: "Наследие Хуаньлун",
        piece: "4 предмета"
      }
    ],
    recommendedTeams: [
      {
        name: "Несокрушимая защита",
        members: [
          {
            id: "fu-xuan",
            name: "Фу Сюань",
            imageUrl: "/images/characters/fu-xuan",
            element: "Quantum"
          },
          {
            id: "blade",
            name: "Блэйд",
            imageUrl: "/images/characters/blade",
            element: "Wind"
          },
          {
            id: "bailu",
            name: "Байлу",
            imageUrl: "/images/characters/bailu",
            element: "Lightning"
          },
          {
            id: "kafka",
            name: "Кафка",
            imageUrl: "/images/characters/kafka",
            element: "Lightning"
          }
        ]
      }
    ]
  },
  
  // 1.4
  {
    id: "jinglu",
    name: "Цзинлю",
    element: "Ice",
    path: "Destruction",
    rarity: 5,
    patch: "1.4",
    imageUrl: "/images/characters/jinglu",
    description: "Главная прорицательница Сяньчжоу Луофу. Её способность предвидеть будущее позволяет ей и её команде избегать опасностей и выдерживать сильнейшие атаки противников.",
    bestLightCones: [
      {
        id: "lc-fx1",
        name: "Она уже не часть твоего мира",
        imageUrl: "/images/light-cones/shes-no-longer-part-of-your-world",
        rarity: 5
      },
      {
        id: "lc-fx2",
        name: "День и ночь",
        imageUrl: "/images/light-cones/day-and-night",
        rarity: 4
      }
    ],
    bestRelics: [
      {
        id: "rel-fx1",
        name: "Стальной стражник",
        imageUrl: "/images/relics/iron-guard",
        set: "Стальной стражник",
        piece: "4 предмета"
      },
      {
        id: "rel-fx2",
        name: "Наследие Хуаньлун",
        imageUrl: "/images/relics/huanlong-legacy",
        set: "Наследие Хуаньлун",
        piece: "4 предмета"
      }
    ],
    recommendedTeams: [
      {
        name: "Несокрушимая защита",
        members: [
          {
            id: "fu-xuan",
            name: "Фу Сюань",
            imageUrl: "/images/characters/fu-xuan",
            element: "Quantum"
          },
          {
            id: "blade",
            name: "Блэйд",
            imageUrl: "/images/characters/blade",
            element: "Wind"
          },
          {
            id: "bailu",
            name: "Байлу",
            imageUrl: "/images/characters/bailu",
            element: "Lightning"
          },
          {
            id: "kafka",
            name: "Кафка",
            imageUrl: "/images/characters/kafka",
            element: "Lightning"
          }
        ]
      }
    ]
  },
  {
    id: "topaz",
    name: "Топаз и Счетовод",
    element: "Fire",
    path: "Hunt",
    rarity: 5,
    patch: "1.4",
    imageUrl: "/images/characters/topaz",
    description: "Главная прорицательница Сяньчжоу Луофу. Её способность предвидеть будущее позволяет ей и её команде избегать опасностей и выдерживать сильнейшие атаки противников.",
    bestLightCones: [
      {
        id: "lc-fx1",
        name: "Она уже не часть твоего мира",
        imageUrl: "/images/light-cones/shes-no-longer-part-of-your-world",
        rarity: 5
      },
      {
        id: "lc-fx2",
        name: "День и ночь",
        imageUrl: "/images/light-cones/day-and-night",
        rarity: 4
      }
    ],
    bestRelics: [
      {
        id: "rel-fx1",
        name: "Стальной стражник",
        imageUrl: "/images/relics/iron-guard",
        set: "Стальной стражник",
        piece: "4 предмета"
      },
      {
        id: "rel-fx2",
        name: "Наследие Хуаньлун",
        imageUrl: "/images/relics/huanlong-legacy",
        set: "Наследие Хуаньлун",
        piece: "4 предмета"
      }
    ],
    recommendedTeams: [
      {
        name: "Несокрушимая защита",
        members: [
          {
            id: "fu-xuan",
            name: "Фу Сюань",
            imageUrl: "/images/characters/fu-xuan",
            element: "Quantum"
          },
          {
            id: "blade",
            name: "Блэйд",
            imageUrl: "/images/characters/blade",
            element: "Wind"
          },
          {
            id: "bailu",
            name: "Байлу",
            imageUrl: "/images/characters/bailu",
            element: "Lightning"
          },
          {
            id: "kafka",
            name: "Кафка",
            imageUrl: "/images/characters/kafka",
            element: "Lightning"
          }
        ]
      }
    ]
  },

  // 1.5
  {
    id: "huohuo",
    name: "Хохо",
    element: "Wind",
    path: "Abundance",
    rarity: 5,
    patch: "1.5",
    imageUrl: "/images/characters/huohuo",
    description: "Главная прорицательница Сяньчжоу Луофу. Её способность предвидеть будущее позволяет ей и её команде избегать опасностей и выдерживать сильнейшие атаки противников.",
    bestLightCones: [
      {
        id: "lc-fx1",
        name: "Она уже не часть твоего мира",
        imageUrl: "/images/light-cones/shes-no-longer-part-of-your-world",
        rarity: 5
      },
      {
        id: "lc-fx2",
        name: "День и ночь",
        imageUrl: "/images/light-cones/day-and-night",
        rarity: 4
      }
    ],
    bestRelics: [
      {
        id: "rel-fx1",
        name: "Стальной стражник",
        imageUrl: "/images/relics/iron-guard",
        set: "Стальной стражник",
        piece: "4 предмета"
      },
      {
        id: "rel-fx2",
        name: "Наследие Хуаньлун",
        imageUrl: "/images/relics/huanlong-legacy",
        set: "Наследие Хуаньлун",
        piece: "4 предмета"
      }
    ],
    recommendedTeams: [
      {
        name: "Несокрушимая защита",
        members: [
          {
            id: "fu-xuan",
            name: "Фу Сюань",
            imageUrl: "/images/characters/fu-xuan",
            element: "Quantum"
          },
          {
            id: "blade",
            name: "Блэйд",
            imageUrl: "/images/characters/blade",
            element: "Wind"
          },
          {
            id: "bailu",
            name: "Байлу",
            imageUrl: "/images/characters/bailu",
            element: "Lightning"
          },
          {
            id: "kafka",
            name: "Кафка",
            imageUrl: "/images/characters/kafka",
            element: "Lightning"
          }
        ]
      }
    ]
  },
  {
    id: "argenti",
    name: "Аргенти",
    element: "Physical",
    path: "Erudition",
    rarity: 5,
    patch: "1.5",
    imageUrl: "/images/characters/argenti",
    description: "Главная прорицательница Сяньчжоу Луофу. Её способность предвидеть будущее позволяет ей и её команде избегать опасностей и выдерживать сильнейшие атаки противников.",
    bestLightCones: [
      {
        id: "lc-fx1",
        name: "Она уже не часть твоего мира",
        imageUrl: "/images/light-cones/shes-no-longer-part-of-your-world",
        rarity: 5
      },
      {
        id: "lc-fx2",
        name: "День и ночь",
        imageUrl: "/images/light-cones/day-and-night",
        rarity: 4
      }
    ],
    bestRelics: [
      {
        id: "rel-fx1",
        name: "Стальной стражник",
        imageUrl: "/images/relics/iron-guard",
        set: "Стальной стражник",
        piece: "4 предмета"
      },
      {
        id: "rel-fx2",
        name: "Наследие Хуаньлун",
        imageUrl: "/images/relics/huanlong-legacy",
        set: "Наследие Хуаньлун",
        piece: "4 предмета"
      }
    ],
    recommendedTeams: [
      {
        name: "Несокрушимая защита",
        members: [
          {
            id: "fu-xuan",
            name: "Фу Сюань",
            imageUrl: "/images/characters/fu-xuan",
            element: "Quantum"
          },
          {
            id: "blade",
            name: "Блэйд",
            imageUrl: "/images/characters/blade",
            element: "Wind"
          },
          {
            id: "bailu",
            name: "Байлу",
            imageUrl: "/images/characters/bailu",
            element: "Lightning"
          },
          {
            id: "kafka",
            name: "Кафка",
            imageUrl: "/images/characters/kafka",
            element: "Lightning"
          }
        ]
      }
    ]
  },

  // 1.6
  {
    id: "ratio",
    name: "Доктор Рацио",
    element: "Imaginary",
    path: "Hunt",
    rarity: 5,
    patch: "1.6",
    imageUrl: "/images/characters/ratio",
    description: "Главная прорицательница Сяньчжоу Луофу. Её способность предвидеть будущее позволяет ей и её команде избегать опасностей и выдерживать сильнейшие атаки противников.",
    bestLightCones: [
      {
        id: "lc-fx1",
        name: "Она уже не часть твоего мира",
        imageUrl: "/images/light-cones/shes-no-longer-part-of-your-world",
        rarity: 5
      },
      {
        id: "lc-fx2",
        name: "День и ночь",
        imageUrl: "/images/light-cones/day-and-night",
        rarity: 4
      }
    ],
    bestRelics: [
      {
        id: "rel-fx1",
        name: "Стальной стражник",
        imageUrl: "/images/relics/iron-guard",
        set: "Стальной стражник",
        piece: "4 предмета"
      },
      {
        id: "rel-fx2",
        name: "Наследие Хуаньлун",
        imageUrl: "/images/relics/huanlong-legacy",
        set: "Наследие Хуаньлун",
        piece: "4 предмета"
      }
    ],
    recommendedTeams: [
      {
        name: "Несокрушимая защита",
        members: [
          {
            id: "fu-xuan",
            name: "Фу Сюань",
            imageUrl: "/images/characters/fu-xuan",
            element: "Quantum"
          },
          {
            id: "blade",
            name: "Блэйд",
            imageUrl: "/images/characters/blade",
            element: "Wind"
          },
          {
            id: "bailu",
            name: "Байлу",
            imageUrl: "/images/characters/bailu",
            element: "Lightning"
          },
          {
            id: "kafka",
            name: "Кафка",
            imageUrl: "/images/characters/kafka",
            element: "Lightning"
          }
        ]
      }
    ]
  },
  {
    id: "ruanmei",
    name: "Жуань Мей",
    element: "Ice",
    path: "Harmony",
    rarity: 5,
    patch: "1.6",
    imageUrl: "/images/characters/ruanmei",
    description: "Главная прорицательница Сяньчжоу Луофу. Её способность предвидеть будущее позволяет ей и её команде избегать опасностей и выдерживать сильнейшие атаки противников.",
    bestLightCones: [
      {
        id: "lc-fx1",
        name: "Она уже не часть твоего мира",
        imageUrl: "/images/light-cones/shes-no-longer-part-of-your-world",
        rarity: 5
      },
      {
        id: "lc-fx2",
        name: "День и ночь",
        imageUrl: "/images/light-cones/day-and-night",
        rarity: 4
      }
    ],
    bestRelics: [
      {
        id: "rel-fx1",
        name: "Стальной стражник",
        imageUrl: "/images/relics/iron-guard",
        set: "Стальной стражник",
        piece: "4 предмета"
      },
      {
        id: "rel-fx2",
        name: "Наследие Хуаньлун",
        imageUrl: "/images/relics/huanlong-legacy",
        set: "Наследие Хуаньлун",
        piece: "4 предмета"
      }
    ],
    recommendedTeams: [
      {
        name: "Несокрушимая защита",
        members: [
          {
            id: "fu-xuan",
            name: "Фу Сюань",
            imageUrl: "/images/characters/fu-xuan",
            element: "Quantum"
          },
          {
            id: "blade",
            name: "Блэйд",
            imageUrl: "/images/characters/blade",
            element: "Wind"
          },
          {
            id: "bailu",
            name: "Байлу",
            imageUrl: "/images/characters/bailu",
            element: "Lightning"
          },
          {
            id: "kafka",
            name: "Кафка",
            imageUrl: "/images/characters/kafka",
            element: "Lightning"
          }
        ]
      }
    ]
  },

  // 2.0

  {
    id: "blackswan",
    name: "Чёрный Лебедь",
    element: "Wind",
    path: "Nihility",
    rarity: 5,
    patch: "2.0",
    imageUrl: "/images/characters/blackswan",
    description: "Главная прорицательница Сяньчжоу Луофу. Её способность предвидеть будущее позволяет ей и её команде избегать опасностей и выдерживать сильнейшие атаки противников.",
    bestLightCones: [
      {
        id: "lc-fx1",
        name: "Она уже не часть твоего мира",
        imageUrl: "/images/light-cones/shes-no-longer-part-of-your-world",
        rarity: 5
      },
      {
        id: "lc-fx2",
        name: "День и ночь",
        imageUrl: "/images/light-cones/day-and-night",
        rarity: 4
      }
    ],
    bestRelics: [
      {
        id: "rel-fx1",
        name: "Стальной стражник",
        imageUrl: "/images/relics/iron-guard",
        set: "Стальной стражник",
        piece: "4 предмета"
      },
      {
        id: "rel-fx2",
        name: "Наследие Хуаньлун",
        imageUrl: "/images/relics/huanlong-legacy",
        set: "Наследие Хуаньлун",
        piece: "4 предмета"
      }
    ],
    recommendedTeams: [
      {
        name: "Несокрушимая защита",
        members: [
          {
            id: "fu-xuan",
            name: "Фу Сюань",
            imageUrl: "/images/characters/fu-xuan",
            element: "Quantum"
          },
          {
            id: "blade",
            name: "Блэйд",
            imageUrl: "/images/characters/blade",
            element: "Wind"
          },
          {
            id: "bailu",
            name: "Байлу",
            imageUrl: "/images/characters/bailu",
            element: "Lightning"
          },
          {
            id: "kafka",
            name: "Кафка",
            imageUrl: "/images/characters/kafka",
            element: "Lightning"
          }
        ]
      }
    ]
  },
  {
    id: "sparkle",
    name: "Искорка",
    element: "Quantum",
    path: "Harmony",
    rarity: 5,
    patch: "2.0",
    imageUrl: "/images/characters/sparkle",
    description: "Главная прорицательница Сяньчжоу Луофу. Её способность предвидеть будущее позволяет ей и её команде избегать опасностей и выдерживать сильнейшие атаки противников.",
    bestLightCones: [
      {
        id: "lc-fx1",
        name: "Она уже не часть твоего мира",
        imageUrl: "/images/light-cones/shes-no-longer-part-of-your-world",
        rarity: 5
      },
      {
        id: "lc-fx2",
        name: "День и ночь",
        imageUrl: "/images/light-cones/day-and-night",
        rarity: 4
      }
    ],
    bestRelics: [
      {
        id: "rel-fx1",
        name: "Стальной стражник",
        imageUrl: "/images/relics/iron-guard",
        set: "Стальной стражник",
        piece: "4 предмета"
      },
      {
        id: "rel-fx2",
        name: "Наследие Хуаньлун",
        imageUrl: "/images/relics/huanlong-legacy",
        set: "Наследие Хуаньлун",
        piece: "4 предмета"
      }
    ],
    recommendedTeams: [
      {
        name: "Несокрушимая защита",
        members: [
          {
            id: "fu-xuan",
            name: "Фу Сюань",
            imageUrl: "/images/characters/fu-xuan",
            element: "Quantum"
          },
          {
            id: "blade",
            name: "Блэйд",
            imageUrl: "/images/characters/blade",
            element: "Wind"
          },
          {
            id: "bailu",
            name: "Байлу",
            imageUrl: "/images/characters/bailu",
            element: "Lightning"
          },
          {
            id: "kafka",
            name: "Кафка",
            imageUrl: "/images/characters/kafka",
            element: "Lightning"
          }
        ]
      }
    ]
  },

  // 2.1 

  {
    id: "acheron",
    name: "Ахерон",
    element: "Lightning",
    path: "Nihility",
    rarity: 5,
    patch: "2.1",
    imageUrl: "/images/characters/acheron",
    description: "Главная прорицательница Сяньчжоу Луофу. Её способность предвидеть будущее позволяет ей и её команде избегать опасностей и выдерживать сильнейшие атаки противников.",
    bestLightCones: [
      {
        id: "lc-fx1",
        name: "Она уже не часть твоего мира",
        imageUrl: "/images/light-cones/shes-no-longer-part-of-your-world",
        rarity: 5
      },
      {
        id: "lc-fx2",
        name: "День и ночь",
        imageUrl: "/images/light-cones/day-and-night",
        rarity: 4
      }
    ],
    bestRelics: [
      {
        id: "rel-fx1",
        name: "Стальной стражник",
        imageUrl: "/images/relics/iron-guard",
        set: "Стальной стражник",
        piece: "4 предмета"
      },
      {
        id: "rel-fx2",
        name: "Наследие Хуаньлун",
        imageUrl: "/images/relics/huanlong-legacy",
        set: "Наследие Хуаньлун",
        piece: "4 предмета"
      }
    ],
    recommendedTeams: [
      {
        name: "Несокрушимая защита",
        members: [
          {
            id: "fu-xuan",
            name: "Фу Сюань",
            imageUrl: "/images/characters/fu-xuan",
            element: "Quantum"
          },
          {
            id: "blade",
            name: "Блэйд",
            imageUrl: "/images/characters/blade",
            element: "Wind"
          },
          {
            id: "bailu",
            name: "Байлу",
            imageUrl: "/images/characters/bailu",
            element: "Lightning"
          },
          {
            id: "kafka",
            name: "Кафка",
            imageUrl: "/images/characters/kafka",
            element: "Lightning"
          }
        ]
      }
    ]
  },
  {
    id: "aventurine",
    name: "Авантюрин",
    element: "Imaginary",
    path: "Preservation",
    rarity: 5,
    patch: "2.1",
    imageUrl: "/images/characters/aventurine",
    description: "Главная прорицательница Сяньчжоу Луофу. Её способность предвидеть будущее позволяет ей и её команде избегать опасностей и выдерживать сильнейшие атаки противников.",
    bestLightCones: [
      {
        id: "lc-fx1",
        name: "Она уже не часть твоего мира",
        imageUrl: "/images/light-cones/shes-no-longer-part-of-your-world",
        rarity: 5
      },
      {
        id: "lc-fx2",
        name: "День и ночь",
        imageUrl: "/images/light-cones/day-and-night",
        rarity: 4
      }
    ],
    bestRelics: [
      {
        id: "rel-fx1",
        name: "Стальной стражник",
        imageUrl: "/images/relics/iron-guard",
        set: "Стальной стражник",
        piece: "4 предмета"
      },
      {
        id: "rel-fx2",
        name: "Наследие Хуаньлун",
        imageUrl: "/images/relics/huanlong-legacy",
        set: "Наследие Хуаньлун",
        piece: "4 предмета"
      }
    ],
    recommendedTeams: [
      {
        name: "Несокрушимая защита",
        members: [
          {
            id: "fu-xuan",
            name: "Фу Сюань",
            imageUrl: "/images/characters/fu-xuan",
            element: "Quantum"
          },
          {
            id: "blade",
            name: "Блэйд",
            imageUrl: "/images/characters/blade",
            element: "Wind"
          },
          {
            id: "bailu",
            name: "Байлу",
            imageUrl: "/images/characters/bailu",
            element: "Lightning"
          },
          {
            id: "kafka",
            name: "Кафка",
            imageUrl: "/images/characters/kafka",
            element: "Lightning"
          }
        ]
      }
    ]
  },


  // 2.2 
  {
    id: "robin",
    name: "Зарянка",
    element: "Physical",
    path: "Harmony",
    rarity: 5,
    patch: "2.2",
    imageUrl: "/images/characters/robin",
    description: "Главная прорицательница Сяньчжоу Луофу. Её способность предвидеть будущее позволяет ей и её команде избегать опасностей и выдерживать сильнейшие атаки противников.",
    bestLightCones: [
      {
        id: "lc-fx1",
        name: "Она уже не часть твоего мира",
        imageUrl: "/images/light-cones/shes-no-longer-part-of-your-world",
        rarity: 5
      },
      {
        id: "lc-fx2",
        name: "День и ночь",
        imageUrl: "/images/light-cones/day-and-night",
        rarity: 4
      }
    ],
    bestRelics: [
      {
        id: "rel-fx1",
        name: "Стальной стражник",
        imageUrl: "/images/relics/iron-guard",
        set: "Стальной стражник",
        piece: "4 предмета"
      },
      {
        id: "rel-fx2",
        name: "Наследие Хуаньлун",
        imageUrl: "/images/relics/huanlong-legacy",
        set: "Наследие Хуаньлун",
        piece: "4 предмета"
      }
    ],
    recommendedTeams: [
      {
        name: "Несокрушимая защита",
        members: [
          {
            id: "fu-xuan",
            name: "Фу Сюань",
            imageUrl: "/images/characters/fu-xuan",
            element: "Quantum"
          },
          {
            id: "blade",
            name: "Блэйд",
            imageUrl: "/images/characters/blade",
            element: "Wind"
          },
          {
            id: "bailu",
            name: "Байлу",
            imageUrl: "/images/characters/bailu",
            element: "Lightning"
          },
          {
            id: "kafka",
            name: "Кафка",
            imageUrl: "/images/characters/kafka",
            element: "Lightning"
          }
        ]
      }
    ]
  },
  {
    id: "boothill",
    name: "Бутхилл",
    element: "Physical",
    path: "Hunt",
    rarity: 5,
    patch: "2.2",
    imageUrl: "/images/characters/boothill",
    description: "Главная прорицательница Сяньчжоу Луофу. Её способность предвидеть будущее позволяет ей и её команде избегать опасностей и выдерживать сильнейшие атаки противников.",
    bestLightCones: [
      {
        id: "lc-fx1",
        name: "Она уже не часть твоего мира",
        imageUrl: "/images/light-cones/shes-no-longer-part-of-your-world",
        rarity: 5
      },
      {
        id: "lc-fx2",
        name: "День и ночь",
        imageUrl: "/images/light-cones/day-and-night",
        rarity: 4
      }
    ],
    bestRelics: [
      {
        id: "rel-fx1",
        name: "Стальной стражник",
        imageUrl: "/images/relics/iron-guard",
        set: "Стальной стражник",
        piece: "4 предмета"
      },
      {
        id: "rel-fx2",
        name: "Наследие Хуаньлун",
        imageUrl: "/images/relics/huanlong-legacy",
        set: "Наследие Хуаньлун",
        piece: "4 предмета"
      }
    ],
    recommendedTeams: [
      {
        name: "Несокрушимая защита",
        members: [
          {
            id: "fu-xuan",
            name: "Фу Сюань",
            imageUrl: "/images/characters/fu-xuan",
            element: "Quantum"
          },
          {
            id: "blade",
            name: "Блэйд",
            imageUrl: "/images/characters/blade",
            element: "Wind"
          },
          {
            id: "bailu",
            name: "Байлу",
            imageUrl: "/images/characters/bailu",
            element: "Lightning"
          },
          {
            id: "kafka",
            name: "Кафка",
            imageUrl: "/images/characters/kafka",
            element: "Lightning"
          }
        ]
      }
    ]
  },
  {
    id: "trailblazerh",
    name: "Первопроходец",
    element: "Imaginary",
    path: "Harmony",
    rarity: 5,
    patch: "2.2",
    imageUrl: "/images/characters/stellancaelush",
    description: "Глава Сян Чжоу. Спокойный и расчетливый лидер, обладающий могущественной молниеносной силой. В бою его сопровождает верный компаньон - громовой дракон Линчуань.",
    bestLightCones: [
      {
        id: "lc-jy1",
        name: "Ночь ворона",
        imageUrl: "/images/light-cones/night-of-the-crow",
        rarity: 5
      },
      {
        id: "lc-jy2",
        name: "Планы перед рассветом",
        imageUrl: "/images/light-cones/before-dawn-plans",
        rarity: 4
      }
    ],
    bestRelics: [
      {
        id: "rel-jy1",
        name: "Виноградная лоза и громовые стихии",
        imageUrl: "/images/relics/vine-and-thunder-elements",
        set: "Виноградная лоза и громовые стихии",
        piece: "4 предмета"
      },
      {
        id: "rel-jy2",
        name: "Небесный дифференциатор",
        imageUrl: "/images/relics/celestial-differentiator",
        set: "Небесный дифференциатор",
        piece: "2 предмета"
      }
    ],
    recommendedTeams: [
      {
        name: "Молниеносная атака",
        members: [
          {
            id: "jing-yuan",
            name: "Цзин Юань",
            imageUrl: "/images/characters/jing-yuan",
            element: "Lightning"
          },
          {
            id: "tingyun",
            name: "Тинъюнь",
            imageUrl: "/images/characters/tingyun",
            element: "Lightning"
          },
          {
            id: "bronya",
            name: "Броня",
            imageUrl: "/images/characters/bronya",
            element: "Wind"
          },
          {
            id: "luocha",
            name: "Лоча",
            imageUrl: "/images/characters/luocha",
            element: "Imaginary"
          }
        ]
      }
    ]
  },

  // 2.3 
  {
    id: "firefly",
    name: "Светлячок",
    element: "Fire",
    path: "Destruction",
    rarity: 5,
    patch: "2.3",
    imageUrl: "/images/characters/firefly",
    description: "Главная прорицательница Сяньчжоу Луофу. Её способность предвидеть будущее позволяет ей и её команде избегать опасностей и выдерживать сильнейшие атаки противников.",
    bestLightCones: [
      {
        id: "lc-fx1",
        name: "Она уже не часть твоего мира",
        imageUrl: "/images/light-cones/shes-no-longer-part-of-your-world",
        rarity: 5
      },
      {
        id: "lc-fx2",
        name: "День и ночь",
        imageUrl: "/images/light-cones/day-and-night",
        rarity: 4
      }
    ],
    bestRelics: [
      {
        id: "rel-fx1",
        name: "Стальной стражник",
        imageUrl: "/images/relics/iron-guard",
        set: "Стальной стражник",
        piece: "4 предмета"
      },
      {
        id: "rel-fx2",
        name: "Наследие Хуаньлун",
        imageUrl: "/images/relics/huanlong-legacy",
        set: "Наследие Хуаньлун",
        piece: "4 предмета"
      }
    ],
    recommendedTeams: [
      {
        name: "Несокрушимая защита",
        members: [
          {
            id: "fu-xuan",
            name: "Фу Сюань",
            imageUrl: "/images/characters/fu-xuan",
            element: "Quantum"
          },
          {
            id: "blade",
            name: "Блэйд",
            imageUrl: "/images/characters/blade",
            element: "Wind"
          },
          {
            id: "bailu",
            name: "Байлу",
            imageUrl: "/images/characters/bailu",
            element: "Lightning"
          },
          {
            id: "kafka",
            name: "Кафка",
            imageUrl: "/images/characters/kafka",
            element: "Lightning"
          }
        ]
      }
    ]
  },
  {
    id: "jade",
    name: "Яшма",
    element: "Quantum",
    path: "Erudition",
    rarity: 5,
    patch: "2.3",
    imageUrl: "/images/characters/jade",
    description: "Главная прорицательница Сяньчжоу Луофу. Её способность предвидеть будущее позволяет ей и её команде избегать опасностей и выдерживать сильнейшие атаки противников.",
    bestLightCones: [
      {
        id: "lc-fx1",
        name: "Она уже не часть твоего мира",
        imageUrl: "/images/light-cones/shes-no-longer-part-of-your-world",
        rarity: 5
      },
      {
        id: "lc-fx2",
        name: "День и ночь",
        imageUrl: "/images/light-cones/day-and-night",
        rarity: 4
      }
    ],
    bestRelics: [
      {
        id: "rel-fx1",
        name: "Стальной стражник",
        imageUrl: "/images/relics/iron-guard",
        set: "Стальной стражник",
        piece: "4 предмета"
      },
      {
        id: "rel-fx2",
        name: "Наследие Хуаньлун",
        imageUrl: "/images/relics/huanlong-legacy",
        set: "Наследие Хуаньлун",
        piece: "4 предмета"
      }
    ],
    recommendedTeams: [
      {
        name: "Несокрушимая защита",
        members: [
          {
            id: "fu-xuan",
            name: "Фу Сюань",
            imageUrl: "/images/characters/fu-xuan",
            element: "Quantum"
          },
          {
            id: "blade",
            name: "Блэйд",
            imageUrl: "/images/characters/blade",
            element: "Wind"
          },
          {
            id: "bailu",
            name: "Байлу",
            imageUrl: "/images/characters/bailu",
            element: "Lightning"
          },
          {
            id: "kafka",
            name: "Кафка",
            imageUrl: "/images/characters/kafka",
            element: "Lightning"
          }
        ]
      }
    ]
  },

  // 2.4

  {
    id: "yunli",
    name: "Юньли",
    element: "Physical",
    path: "Destruction",
    rarity: 5,
    patch: "2.4",
    imageUrl: "/images/characters/yunli",
    description: "Главная прорицательница Сяньчжоу Луофу. Её способность предвидеть будущее позволяет ей и её команде избегать опасностей и выдерживать сильнейшие атаки противников.",
    bestLightCones: [
      {
        id: "lc-fx1",
        name: "Она уже не часть твоего мира",
        imageUrl: "/images/light-cones/shes-no-longer-part-of-your-world",
        rarity: 5
      },
      {
        id: "lc-fx2",
        name: "День и ночь",
        imageUrl: "/images/light-cones/day-and-night",
        rarity: 4
      }
    ],
    bestRelics: [
      {
        id: "rel-fx1",
        name: "Стальной стражник",
        imageUrl: "/images/relics/iron-guard",
        set: "Стальной стражник",
        piece: "4 предмета"
      },
      {
        id: "rel-fx2",
        name: "Наследие Хуаньлун",
        imageUrl: "/images/relics/huanlong-legacy",
        set: "Наследие Хуаньлун",
        piece: "4 предмета"
      }
    ],
    recommendedTeams: [
      {
        name: "Несокрушимая защита",
        members: [
          {
            id: "fu-xuan",
            name: "Фу Сюань",
            imageUrl: "/images/characters/fu-xuan",
            element: "Quantum"
          },
          {
            id: "blade",
            name: "Блэйд",
            imageUrl: "/images/characters/blade",
            element: "Wind"
          },
          {
            id: "bailu",
            name: "Байлу",
            imageUrl: "/images/characters/bailu",
            element: "Lightning"
          },
          {
            id: "kafka",
            name: "Кафка",
            imageUrl: "/images/characters/kafka",
            element: "Lightning"
          }
        ]
      }
    ]
  },
  {
    id: "jiaoqiu",
    name: "Цзяоцю",
    element: "Fire",
    path: "Nihility",
    rarity: 5,
    patch: "2.4",
    imageUrl: "/images/characters/jiaoqiu",
    description: "Главная прорицательница Сяньчжоу Луофу. Её способность предвидеть будущее позволяет ей и её команде избегать опасностей и выдерживать сильнейшие атаки противников.",
    bestLightCones: [
      {
        id: "lc-fx1",
        name: "Она уже не часть твоего мира",
        imageUrl: "/images/light-cones/shes-no-longer-part-of-your-world",
        rarity: 5
      },
      {
        id: "lc-fx2",
        name: "День и ночь",
        imageUrl: "/images/light-cones/day-and-night",
        rarity: 4
      }
    ],
    bestRelics: [
      {
        id: "rel-fx1",
        name: "Стальной стражник",
        imageUrl: "/images/relics/iron-guard",
        set: "Стальной стражник",
        piece: "4 предмета"
      },
      {
        id: "rel-fx2",
        name: "Наследие Хуаньлун",
        imageUrl: "/images/relics/huanlong-legacy",
        set: "Наследие Хуаньлун",
        piece: "4 предмета"
      }
    ],
    recommendedTeams: [
      {
        name: "Несокрушимая защита",
        members: [
          {
            id: "fu-xuan",
            name: "Фу Сюань",
            imageUrl: "/images/characters/fu-xuan",
            element: "Quantum"
          },
          {
            id: "blade",
            name: "Блэйд",
            imageUrl: "/images/characters/blade",
            element: "Wind"
          },
          {
            id: "bailu",
            name: "Байлу",
            imageUrl: "/images/characters/bailu",
            element: "Lightning"
          },
          {
            id: "kafka",
            name: "Кафка",
            imageUrl: "/images/characters/kafka",
            element: "Lightning"
          }
        ]
      }
    ]
  },

  // 2.5

  {
    id: "feixiao",
    name: "Фэйсяо",
    element: "Wind",
    path: "Hunt",
    rarity: 5,
    patch: "2.5",
    imageUrl: "/images/characters/feixiao",
    description: "Главная прорицательница Сяньчжоу Луофу. Её способность предвидеть будущее позволяет ей и её команде избегать опасностей и выдерживать сильнейшие атаки противников.",
    bestLightCones: [
      {
        id: "lc-fx1",
        name: "Она уже не часть твоего мира",
        imageUrl: "/images/light-cones/shes-no-longer-part-of-your-world",
        rarity: 5
      },
      {
        id: "lc-fx2",
        name: "День и ночь",
        imageUrl: "/images/light-cones/day-and-night",
        rarity: 4
      }
    ],
    bestRelics: [
      {
        id: "rel-fx1",
        name: "Стальной стражник",
        imageUrl: "/images/relics/iron-guard",
        set: "Стальной стражник",
        piece: "4 предмета"
      },
      {
        id: "rel-fx2",
        name: "Наследие Хуаньлун",
        imageUrl: "/images/relics/huanlong-legacy",
        set: "Наследие Хуаньлун",
        piece: "4 предмета"
      }
    ],
    recommendedTeams: [
      {
        name: "Несокрушимая защита",
        members: [
          {
            id: "fu-xuan",
            name: "Фу Сюань",
            imageUrl: "/images/characters/fu-xuan",
            element: "Quantum"
          },
          {
            id: "blade",
            name: "Блэйд",
            imageUrl: "/images/characters/blade",
            element: "Wind"
          },
          {
            id: "bailu",
            name: "Байлу",
            imageUrl: "/images/characters/bailu",
            element: "Lightning"
          },
          {
            id: "kafka",
            name: "Кафка",
            imageUrl: "/images/characters/kafka",
            element: "Lightning"
          }
        ]
      }
    ]
  },
  {
    id: "lingsha",
    name: "Линша",
    element: "Fire",
    path: "Abundance",
    rarity: 5,
    patch: "2.5",
    imageUrl: "/images/characters/lingsha",
    description: "Главная прорицательница Сяньчжоу Луофу. Её способность предвидеть будущее позволяет ей и её команде избегать опасностей и выдерживать сильнейшие атаки противников.",
    bestLightCones: [
      {
        id: "lc-fx1",
        name: "Она уже не часть твоего мира",
        imageUrl: "/images/light-cones/shes-no-longer-part-of-your-world",
        rarity: 5
      },
      {
        id: "lc-fx2",
        name: "День и ночь",
        imageUrl: "/images/light-cones/day-and-night",
        rarity: 4
      }
    ],
    bestRelics: [
      {
        id: "rel-fx1",
        name: "Стальной стражник",
        imageUrl: "/images/relics/iron-guard",
        set: "Стальной стражник",
        piece: "4 предмета"
      },
      {
        id: "rel-fx2",
        name: "Наследие Хуаньлун",
        imageUrl: "/images/relics/huanlong-legacy",
        set: "Наследие Хуаньлун",
        piece: "4 предмета"
      }
    ],
    recommendedTeams: [
      {
        name: "Несокрушимая защита",
        members: [
          {
            id: "fu-xuan",
            name: "Фу Сюань",
            imageUrl: "/images/characters/fu-xuan",
            element: "Quantum"
          },
          {
            id: "blade",
            name: "Блэйд",
            imageUrl: "/images/characters/blade",
            element: "Wind"
          },
          {
            id: "bailu",
            name: "Байлу",
            imageUrl: "/images/characters/bailu",
            element: "Lightning"
          },
          {
            id: "kafka",
            name: "Кафка",
            imageUrl: "/images/characters/kafka",
            element: "Lightning"
          }
        ]
      }
    ]
  },

  // 2.6
  {
    id: "rappa",
    name: "Раппа",
    element: "Imaginary",
    path: "Erudition",
    rarity: 5,
    patch: "2.6",
    imageUrl: "/images/characters/rappa",
    description: "Главная прорицательница Сяньчжоу Луофу. Её способность предвидеть будущее позволяет ей и её команде избегать опасностей и выдерживать сильнейшие атаки противников.",
    bestLightCones: [
      {
        id: "lc-fx1",
        name: "Она уже не часть твоего мира",
        imageUrl: "/images/light-cones/shes-no-longer-part-of-your-world",
        rarity: 5
      },
      {
        id: "lc-fx2",
        name: "День и ночь",
        imageUrl: "/images/light-cones/day-and-night",
        rarity: 4
      }
    ],
    bestRelics: [
      {
        id: "rel-fx1",
        name: "Стальной стражник",
        imageUrl: "/images/relics/iron-guard",
        set: "Стальной стражник",
        piece: "4 предмета"
      },
      {
        id: "rel-fx2",
        name: "Наследие Хуаньлун",
        imageUrl: "/images/relics/huanlong-legacy",
        set: "Наследие Хуаньлун",
        piece: "4 предмета"
      }
    ],
    recommendedTeams: [
      {
        name: "Несокрушимая защита",
        members: [
          {
            id: "fu-xuan",
            name: "Фу Сюань",
            imageUrl: "/images/characters/fu-xuan",
            element: "Quantum"
          },
          {
            id: "blade",
            name: "Блэйд",
            imageUrl: "/images/characters/blade",
            element: "Wind"
          },
          {
            id: "bailu",
            name: "Байлу",
            imageUrl: "/images/characters/bailu",
            element: "Lightning"
          },
          {
            id: "kafka",
            name: "Кафка",
            imageUrl: "/images/characters/kafka",
            element: "Lightning"
          }
        ]
      }
    ]
  },
  

  // 2.7 
  {
    id: "sunday",
    name: "Воскресенье",
    element: "Imaginary",
    path: "Harmony",
    rarity: 5,
    patch: "2.7",
    imageUrl: "/images/characters/sunday",
    description: "Главная прорицательница Сяньчжоу Луофу. Её способность предвидеть будущее позволяет ей и её команде избегать опасностей и выдерживать сильнейшие атаки противников.",
    bestLightCones: [
      {
        id: "lc-fx1",
        name: "Она уже не часть твоего мира",
        imageUrl: "/images/light-cones/shes-no-longer-part-of-your-world",
        rarity: 5
      },
      {
        id: "lc-fx2",
        name: "День и ночь",
        imageUrl: "/images/light-cones/day-and-night",
        rarity: 4
      }
    ],
    bestRelics: [
      {
        id: "rel-fx1",
        name: "Стальной стражник",
        imageUrl: "/images/relics/iron-guard",
        set: "Стальной стражник",
        piece: "4 предмета"
      },
      {
        id: "rel-fx2",
        name: "Наследие Хуаньлун",
        imageUrl: "/images/relics/huanlong-legacy",
        set: "Наследие Хуаньлун",
        piece: "4 предмета"
      }
    ],
    recommendedTeams: [
      {
        name: "Несокрушимая защита",
        members: [
          {
            id: "fu-xuan",
            name: "Фу Сюань",
            imageUrl: "/images/characters/fu-xuan",
            element: "Quantum"
          },
          {
            id: "blade",
            name: "Блэйд",
            imageUrl: "/images/characters/blade",
            element: "Wind"
          },
          {
            id: "bailu",
            name: "Байлу",
            imageUrl: "/images/characters/bailu",
            element: "Lightning"
          },
          {
            id: "kafka",
            name: "Кафка",
            imageUrl: "/images/characters/kafka",
            element: "Lightning"
          }
        ]
      }
    ]
  },
  {
    id: "fugue",
    name: "Фуга",
    element: "Fire",
    path: "Nihility",
    rarity: 5,
    patch: "2.7",
    imageUrl: "/images/characters/fugue",
    description: "Главная прорицательница Сяньчжоу Луофу. Её способность предвидеть будущее позволяет ей и её команде избегать опасностей и выдерживать сильнейшие атаки противников.",
    bestLightCones: [
      {
        id: "lc-fx1",
        name: "Она уже не часть твоего мира",
        imageUrl: "/images/light-cones/shes-no-longer-part-of-your-world",
        rarity: 5
      },
      {
        id: "lc-fx2",
        name: "День и ночь",
        imageUrl: "/images/light-cones/day-and-night",
        rarity: 4
      }
    ],
    bestRelics: [
      {
        id: "rel-fx1",
        name: "Стальной стражник",
        imageUrl: "/images/relics/iron-guard",
        set: "Стальной стражник",
        piece: "4 предмета"
      },
      {
        id: "rel-fx2",
        name: "Наследие Хуаньлун",
        imageUrl: "/images/relics/huanlong-legacy",
        set: "Наследие Хуаньлун",
        piece: "4 предмета"
      }
    ],
    recommendedTeams: [
      {
        name: "Несокрушимая защита",
        members: [
          {
            id: "fu-xuan",
            name: "Фу Сюань",
            imageUrl: "/images/characters/fu-xuan",
            element: "Quantum"
          },
          {
            id: "blade",
            name: "Блэйд",
            imageUrl: "/images/characters/blade",
            element: "Wind"
          },
          {
            id: "bailu",
            name: "Байлу",
            imageUrl: "/images/characters/bailu",
            element: "Lightning"
          },
          {
            id: "kafka",
            name: "Кафка",
            imageUrl: "/images/characters/kafka",
            element: "Lightning"
          }
        ]
      }
    ]
  },

  // 3.0

  {
    id: "theherta",
    name: "Великая Герта",
    element: "Ice",
    path: "Erudition",
    rarity: 5,
    patch: "3.0",
    imageUrl: "/images/characters/theherta",
    description: "Главная прорицательница Сяньчжоу Луофу. Её способность предвидеть будущее позволяет ей и её команде избегать опасностей и выдерживать сильнейшие атаки противников.",
    bestLightCones: [
      {
        id: "lc-fx1",
        name: "Она уже не часть твоего мира",
        imageUrl: "/images/light-cones/shes-no-longer-part-of-your-world",
        rarity: 5
      },
      {
        id: "lc-fx2",
        name: "День и ночь",
        imageUrl: "/images/light-cones/day-and-night",
        rarity: 4
      }
    ],
    bestRelics: [
      {
        id: "rel-fx1",
        name: "Стальной стражник",
        imageUrl: "/images/relics/iron-guard",
        set: "Стальной стражник",
        piece: "4 предмета"
      },
      {
        id: "rel-fx2",
        name: "Наследие Хуаньлун",
        imageUrl: "/images/relics/huanlong-legacy",
        set: "Наследие Хуаньлун",
        piece: "4 предмета"
      }
    ],
    recommendedTeams: [
      {
        name: "Несокрушимая защита",
        members: [
          {
            id: "fu-xuan",
            name: "Фу Сюань",
            imageUrl: "/images/characters/fu-xuan",
            element: "Quantum"
          },
          {
            id: "blade",
            name: "Блэйд",
            imageUrl: "/images/characters/blade",
            element: "Wind"
          },
          {
            id: "bailu",
            name: "Байлу",
            imageUrl: "/images/characters/bailu",
            element: "Lightning"
          },
          {
            id: "kafka",
            name: "Кафка",
            imageUrl: "/images/characters/kafka",
            element: "Lightning"
          }
        ]
      }
    ]
  },
  {
    id: "aglaea",
    name: "Аглая",
    element: "Lightning",
    path: "Remembrance",
    rarity: 5,
    patch: "3.0",
    imageUrl: "/images/characters/aglaea",
    description: "Главная прорицательница Сяньчжоу Луофу. Её способность предвидеть будущее позволяет ей и её команде избегать опасностей и выдерживать сильнейшие атаки противников.",
    bestLightCones: [
      {
        id: "lc-fx1",
        name: "Она уже не часть твоего мира",
        imageUrl: "/images/light-cones/shes-no-longer-part-of-your-world",
        rarity: 5
      },
      {
        id: "lc-fx2",
        name: "День и ночь",
        imageUrl: "/images/light-cones/day-and-night",
        rarity: 4
      }
    ],
    bestRelics: [
      {
        id: "rel-fx1",
        name: "Стальной стражник",
        imageUrl: "/images/relics/iron-guard",
        set: "Стальной стражник",
        piece: "4 предмета"
      },
      {
        id: "rel-fx2",
        name: "Наследие Хуаньлун",
        imageUrl: "/images/relics/huanlong-legacy",
        set: "Наследие Хуаньлун",
        piece: "4 предмета"
      }
    ],
    recommendedTeams: [
      {
        name: "Несокрушимая защита",
        members: [
          {
            id: "fu-xuan",
            name: "Фу Сюань",
            imageUrl: "/images/characters/fu-xuan",
            element: "Quantum"
          },
          {
            id: "blade",
            name: "Блэйд",
            imageUrl: "/images/characters/blade",
            element: "Wind"
          },
          {
            id: "bailu",
            name: "Байлу",
            imageUrl: "/images/characters/bailu",
            element: "Lightning"
          },
          {
            id: "kafka",
            name: "Кафка",
            imageUrl: "/images/characters/kafka",
            element: "Lightning"
          }
        ]
      }
    ]
  },

  // 3.1
  {
    id: "tribbie",
    name: "Трибби",
    element: "Quantum",
    path: "Harmony",
    rarity: 5,
    patch: "3.1",
    imageUrl: "/images/characters/tribbie",
    description: "Главная прорицательница Сяньчжоу Луофу. Её способность предвидеть будущее позволяет ей и её команде избегать опасностей и выдерживать сильнейшие атаки противников.",
    bestLightCones: [
      {
        id: "lc-fx1",
        name: "Она уже не часть твоего мира",
        imageUrl: "/images/light-cones/shes-no-longer-part-of-your-world",
        rarity: 5
      },
      {
        id: "lc-fx2",
        name: "День и ночь",
        imageUrl: "/images/light-cones/day-and-night",
        rarity: 4
      }
    ],
    bestRelics: [
      {
        id: "rel-fx1",
        name: "Стальной стражник",
        imageUrl: "/images/relics/iron-guard",
        set: "Стальной стражник",
        piece: "4 предмета"
      },
      {
        id: "rel-fx2",
        name: "Наследие Хуаньлун",
        imageUrl: "/images/relics/huanlong-legacy",
        set: "Наследие Хуаньлун",
        piece: "4 предмета"
      }
    ],
    recommendedTeams: [
      {
        name: "Несокрушимая защита",
        members: [
          {
            id: "fu-xuan",
            name: "Фу Сюань",
            imageUrl: "/images/characters/fu-xuan",
            element: "Quantum"
          },
          {
            id: "blade",
            name: "Блэйд",
            imageUrl: "/images/characters/blade",
            element: "Wind"
          },
          {
            id: "bailu",
            name: "Байлу",
            imageUrl: "/images/characters/bailu",
            element: "Lightning"
          },
          {
            id: "kafka",
            name: "Кафка",
            imageUrl: "/images/characters/kafka",
            element: "Lightning"
          }
        ]
      }
    ]
  },
  {
    id: "mydei",
    name: "Мидей",
    element: "Imaginary",
    path: "Destruction",
    rarity: 5,
    patch: "3.1",
    imageUrl: "/images/characters/mydei",
    description: "Главная прорицательница Сяньчжоу Луофу. Её способность предвидеть будущее позволяет ей и её команде избегать опасностей и выдерживать сильнейшие атаки противников.",
    bestLightCones: [
      {
        id: "lc-fx1",
        name: "Она уже не часть твоего мира",
        imageUrl: "/images/light-cones/shes-no-longer-part-of-your-world",
        rarity: 5
      },
      {
        id: "lc-fx2",
        name: "День и ночь",
        imageUrl: "/images/light-cones/day-and-night",
        rarity: 4
      }
    ],
    bestRelics: [
      {
        id: "rel-fx1",
        name: "Стальной стражник",
        imageUrl: "/images/relics/iron-guard",
        set: "Стальной стражник",
        piece: "4 предмета"
      },
      {
        id: "rel-fx2",
        name: "Наследие Хуаньлун",
        imageUrl: "/images/relics/huanlong-legacy",
        set: "Наследие Хуаньлун",
        piece: "4 предмета"
      }
    ],
    recommendedTeams: [
      {
        name: "Несокрушимая защита",
        members: [
          {
            id: "fu-xuan",
            name: "Фу Сюань",
            imageUrl: "/images/characters/fu-xuan",
            element: "Quantum"
          },
          {
            id: "blade",
            name: "Блэйд",
            imageUrl: "/images/characters/blade",
            element: "Wind"
          },
          {
            id: "bailu",
            name: "Байлу",
            imageUrl: "/images/characters/bailu",
            element: "Lightning"
          },
          {
            id: "kafka",
            name: "Кафка",
            imageUrl: "/images/characters/kafka",
            element: "Lightning"
          }
        ]
      }
    ]
  },
  {
    id: "trailblazerr",
    name: "Первопроходец",
    element: "Ice",
    path: "Remembrance",
    rarity: 5,
    patch: "3.0",
    imageUrl: "/images/characters/stellancaelusr",
    description: "Глава Сян Чжоу. Спокойный и расчетливый лидер, обладающий могущественной молниеносной силой. В бою его сопровождает верный компаньон - громовой дракон Линчуань.",
    bestLightCones: [
      {
        id: "lc-jy1",
        name: "Ночь ворона",
        imageUrl: "/images/light-cones/night-of-the-crow",
        rarity: 5
      },
      {
        id: "lc-jy2",
        name: "Планы перед рассветом",
        imageUrl: "/images/light-cones/before-dawn-plans",
        rarity: 4
      }
    ],
    bestRelics: [
      {
        id: "rel-jy1",
        name: "Виноградная лоза и громовые стихии",
        imageUrl: "/images/relics/vine-and-thunder-elements",
        set: "Виноградная лоза и громовые стихии",
        piece: "4 предмета"
      },
      {
        id: "rel-jy2",
        name: "Небесный дифференциатор",
        imageUrl: "/images/relics/celestial-differentiator",
        set: "Небесный дифференциатор",
        piece: "2 предмета"
      }
    ],
    recommendedTeams: [
      {
        name: "Молниеносная атака",
        members: [
          {
            id: "jing-yuan",
            name: "Цзин Юань",
            imageUrl: "/images/characters/jing-yuan",
            element: "Lightning"
          },
          {
            id: "tingyun",
            name: "Тинъюнь",
            imageUrl: "/images/characters/tingyun",
            element: "Lightning"
          },
          {
            id: "bronya",
            name: "Броня",
            imageUrl: "/images/characters/bronya",
            element: "Wind"
          },
          {
            id: "luocha",
            name: "Лоча",
            imageUrl: "/images/characters/luocha",
            element: "Imaginary"
          }
        ]
      }
    ]
  },

  // 3.2
  {
    id: "castorice",
    name: "Кастория",
    element: "Quantum",
    path: "Remembrance",
    rarity: 5,
    patch: "3.2",
    imageUrl: "/images/characters/castorice",
    description: "Главная прорицательница Сяньчжоу Луофу. Её способность предвидеть будущее позволяет ей и её команде избегать опасностей и выдерживать сильнейшие атаки противников.",
    bestLightCones: [
      {
        id: "lc-fx1",
        name: "Она уже не часть твоего мира",
        imageUrl: "/images/light-cones/shes-no-longer-part-of-your-world",
        rarity: 5
      },
      {
        id: "lc-fx2",
        name: "День и ночь",
        imageUrl: "/images/light-cones/day-and-night",
        rarity: 4
      }
    ],
    bestRelics: [
      {
        id: "rel-fx1",
        name: "Стальной стражник",
        imageUrl: "/images/relics/iron-guard",
        set: "Стальной стражник",
        piece: "4 предмета"
      },
      {
        id: "rel-fx2",
        name: "Наследие Хуаньлун",
        imageUrl: "/images/relics/huanlong-legacy",
        set: "Наследие Хуаньлун",
        piece: "4 предмета"
      }
    ],
    recommendedTeams: [
      {
        name: "Несокрушимая защита",
        members: [
          {
            id: "fu-xuan",
            name: "Фу Сюань",
            imageUrl: "/images/characters/fu-xuan",
            element: "Quantum"
          },
          {
            id: "blade",
            name: "Блэйд",
            imageUrl: "/images/characters/blade",
            element: "Wind"
          },
          {
            id: "bailu",
            name: "Байлу",
            imageUrl: "/images/characters/bailu",
            element: "Lightning"
          },
          {
            id: "kafka",
            name: "Кафка",
            imageUrl: "/images/characters/kafka",
            element: "Lightning"
          }
        ]
      }
    ]
  },
  {
    id: "anaxa",
    name: "Анакса",
    element: "Wind",
    path: "Erudition",
    rarity: 5,
    patch: "3.2",
    imageUrl: "/images/characters/anaxa",
    description: "Главная прорицательница Сяньчжоу Луофу. Её способность предвидеть будущее позволяет ей и её команде избегать опасностей и выдерживать сильнейшие атаки противников.",
    bestLightCones: [
      {
        id: "lc-fx1",
        name: "Она уже не часть твоего мира",
        imageUrl: "/images/light-cones/shes-no-longer-part-of-your-world",
        rarity: 5
      },
      {
        id: "lc-fx2",
        name: "День и ночь",
        imageUrl: "/images/light-cones/day-and-night",
        rarity: 4
      }
    ],
    bestRelics: [
      {
        id: "rel-fx1",
        name: "Стальной стражник",
        imageUrl: "/images/relics/iron-guard",
        set: "Стальной стражник",
        piece: "4 предмета"
      },
      {
        id: "rel-fx2",
        name: "Наследие Хуаньлун",
        imageUrl: "/images/relics/huanlong-legacy",
        set: "Наследие Хуаньлун",
        piece: "4 предмета"
      }
    ],
    recommendedTeams: [
      {
        name: "Несокрушимая защита",
        members: [
          {
            id: "fu-xuan",
            name: "Фу Сюань",
            imageUrl: "/images/characters/fu-xuan",
            element: "Quantum"
          },
          {
            id: "blade",
            name: "Блэйд",
            imageUrl: "/images/characters/blade",
            element: "Wind"
          },
          {
            id: "bailu",
            name: "Байлу",
            imageUrl: "/images/characters/bailu",
            element: "Lightning"
          },
          {
            id: "kafka",
            name: "Кафка",
            imageUrl: "/images/characters/kafka",
            element: "Lightning"
          }
        ]
      }
    ]
  },

  // 3.3
  {
    id: "hyacine",
    name: "Гиацина",
    element: "Wind",
    path: "Abundance",
    rarity: 5,
    patch: "3.3",
    imageUrl: "/images/characters/hyacine",
    description: "Главная прорицательница Сяньчжоу Луофу. Её способность предвидеть будущее позволяет ей и её команде избегать опасностей и выдерживать сильнейшие атаки противников.",
    bestLightCones: [
      {
        id: "lc-fx1",
        name: "Она уже не часть твоего мира",
        imageUrl: "/images/light-cones/shes-no-longer-part-of-your-world",
        rarity: 5
      },
      {
        id: "lc-fx2",
        name: "День и ночь",
        imageUrl: "/images/light-cones/day-and-night",
        rarity: 4
      }
    ],
    bestRelics: [
      {
        id: "rel-fx1",
        name: "Стальной стражник",
        imageUrl: "/images/relics/iron-guard",
        set: "Стальной стражник",
        piece: "4 предмета"
      },
      {
        id: "rel-fx2",
        name: "Наследие Хуаньлун",
        imageUrl: "/images/relics/huanlong-legacy",
        set: "Наследие Хуаньлун",
        piece: "4 предмета"
      }
    ],
    recommendedTeams: [
      {
        name: "Несокрушимая защита",
        members: [
          {
            id: "fu-xuan",
            name: "Фу Сюань",
            imageUrl: "/images/characters/fu-xuan",
            element: "Quantum"
          },
          {
            id: "blade",
            name: "Блэйд",
            imageUrl: "/images/characters/blade",
            element: "Wind"
          },
          {
            id: "bailu",
            name: "Байлу",
            imageUrl: "/images/characters/bailu",
            element: "Lightning"
          },
          {
            id: "kafka",
            name: "Кафка",
            imageUrl: "/images/characters/kafka",
            element: "Lightning"
          }
        ]
      }
    ]
  },
  {
    id: "cipher",
    name: "Цифер",
    element: "Quantum",
    path: "Nihility",
    rarity: 5,
    patch: "3.3",
    imageUrl: "/images/characters/cipher",
    description: "Главная прорицательница Сяньчжоу Луофу. Её способность предвидеть будущее позволяет ей и её команде избегать опасностей и выдерживать сильнейшие атаки противников.",
    bestLightCones: [
      {
        id: "lc-fx1",
        name: "Она уже не часть твоего мира",
        imageUrl: "/images/light-cones/shes-no-longer-part-of-your-world",
        rarity: 5
      },
      {
        id: "lc-fx2",
        name: "День и ночь",
        imageUrl: "/images/light-cones/day-and-night",
        rarity: 4
      }
    ],
    bestRelics: [
      {
        id: "rel-fx1",
        name: "Стальной стражник",
        imageUrl: "/images/relics/iron-guard",
        set: "Стальной стражник",
        piece: "4 предмета"
      },
      {
        id: "rel-fx2",
        name: "Наследие Хуаньлун",
        imageUrl: "/images/relics/huanlong-legacy",
        set: "Наследие Хуаньлун",
        piece: "4 предмета"
      }
    ],
    recommendedTeams: [
      {
        name: "Несокрушимая защита",
        members: [
          {
            id: "fu-xuan",
            name: "Фу Сюань",
            imageUrl: "/images/characters/fu-xuan",
            element: "Quantum"
          },
          {
            id: "blade",
            name: "Блэйд",
            imageUrl: "/images/characters/blade",
            element: "Wind"
          },
          {
            id: "bailu",
            name: "Байлу",
            imageUrl: "/images/characters/bailu",
            element: "Lightning"
          },
          {
            id: "kafka",
            name: "Кафка",
            imageUrl: "/images/characters/kafka",
            element: "Lightning"
          }
        ]
      }
    ]
  },

]; 
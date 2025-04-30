export const dynamic = 'force-static';
export const dynamicParams = false;

import { notFound } from 'next/navigation';
import { Header } from '../../components/Header/Header';
import { CharacterDetails } from '../../components/characters/CharacterDetails/CharacterDetails';
import { characters } from '../../data/characters/fiveStarCharacters';
import { fourStarCharacters } from '../../data/characters/fourStarCharacters';

// Функция для генерации статических параметров
export function generateStaticParams() {
  // Объединяем всех персонажей из обоих списков
  const allCharacters = [...characters, ...fourStarCharacters];
  
  // Возвращаем массив параметров для каждого персонажа
  return allCharacters.map((character) => ({
    id: character.id,
  }));
}

// Эта функция вызывается во время рендеринга
export default function CharacterPage({ params }: { params: { id: string } }) {
  const id = params.id;
  
  // Ищем персонажа в обоих списках
  const character = characters.find(char => char.id === id) 
    || fourStarCharacters.find(char => char.id === id);
  
  // Если персонаж не найден, возвращаем 404
  if (!character) {
    notFound();
  }

  return (
    <>
      <Header />
      <CharacterDetails
        id={character.id}
        name={character.name}
        element={character.element}
        path={character.path}
        rarity={character.rarity}
        imageUrl={character.imageUrl}
        description={character.description}
        metaTags={character.metaTags}
        bestLightCones={character.bestLightCones}
        bestRelics={character.bestRelics}
        recommendedTeams={character.recommendedTeams}
      />
    </>
  );
} 
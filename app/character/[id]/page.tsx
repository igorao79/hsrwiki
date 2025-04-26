'use client';

import { useParams } from 'next/navigation';
import { Header } from '../../components/Header/Header';
import { CharacterDetails } from '../../components/CharacterDetails/CharacterDetails';
import { characters } from '../../data/fiveStarCharacters';
import { fourStarCharacters } from '../../data/fourStarCharacters';
import Link from 'next/link';

export default function CharacterPage() {
  const params = useParams();
  const characterId = params.id as string;
  
  // Ищем персонажа в обоих списках
  const character = characters.find(char => char.id === characterId) 
    || fourStarCharacters.find(char => char.id === characterId);
  
  if (!character) {
    return (
      <>
        <Header />
        <div className="container">
          <div className="error-page">
            <h1>Персонаж не найден</h1>
            <p>Персонаж, которого вы ищете, не существует.</p>
            <Link href="/" className="button">
              На главную
            </Link>
          </div>
        </div>
      </>
    );
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
        bestLightCones={character.bestLightCones}
        bestRelics={character.bestRelics}
        recommendedTeams={character.recommendedTeams}
      />
    </>
  );
} 
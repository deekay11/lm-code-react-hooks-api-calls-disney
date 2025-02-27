import React from "react";
import { DisneyCharacter } from "../disney_character";
import Character from "./character";
import { useFavourites } from "../fav_character";

interface CharacterContainerProps {
  characters: Array<DisneyCharacter>;
}

const CharacterContainer: React.FC<CharacterContainerProps> = ({
  characters,
}) => {

  const { favourites, isFavouritesPage } = useFavourites();
  const page = !isFavouritesPage ? characters : favourites;

  return (
    <div className="card-container">
      {characters.map((character) => (
        <Character key={character._id} character={character} />
      ))}
    </div>
  );
};

export default CharacterContainer;
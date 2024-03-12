import React from "react";

const CharacterCard = ({ character }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg p-4">
      <h3 className="font-bold text-xl mb-2">
        {character.name} - {character.id}
      </h3>
      <img
        src={character.image}
        alt={character.name}
        className="w-full h-48 object-cover"
      />

      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
    </div>
  );
};

export default CharacterCard;

import React from "react";
import CharacterCard from "../../components/CharacterCard";
import { useSelector } from "react-redux";

const FavoritesPage = () => {
  const favorites = useSelector((state) => state.favorites.items);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Favorites</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {favorites.length > 0 ? (
          favorites.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))
        ) : (
          <p>No favorites added yet.</p>
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;

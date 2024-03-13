import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../redux/favoritesSlice";
import ModalComponent from "./ModalComponent";

const CharacterCard = ({ character }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);
  const isFavorite = favorites.some((item) => item.id === character.id);
  const [showModal, setShowModal] = useState(false);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      setShowModal(true);
    } else {
      dispatch(addFavorite(character));
    }
  };

  const confirmRemoveFavorite = () => {
    dispatch(removeFavorite(character));
    setShowModal(false);
  };

  const cancelRemoveFavorite = () => {
    setShowModal(false);
  };
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

      <div className="flex justify-between">
        <div>
          <p>Status: {character.status}</p>
          <p>Species: {character.species}</p>
        </div>
        <button onClick={handleFavoriteClick}>
          {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
        </button>
      </div>
      <ModalComponent
        closeModal={() => setShowModal(false)}
        isOpen={showModal}
        onRequestClose={cancelRemoveFavorite}
      >
        <div>
          Are you sure you want to remove this character from favorites?
        </div>
        <button onClick={confirmRemoveFavorite}>Yes</button>
        <button onClick={cancelRemoveFavorite}>No</button>
      </ModalComponent>
    </div>
  );
};

export default CharacterCard;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../redux/favoritesSlice";
import ModalComponent from "./ModalComponent";
import { FaHeart, FaRegHeart } from "react-icons/fa";

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
      <h3 className="text-primary font-bold text-xl mb-2">
        {character.name} - {character.id}
      </h3>
      <img
        src={character.image}
        alt={character.name}
        className="w-full h-48 object-cover"
      />

      <div className=" mt-2 flex justify-between">
        <div>
          <p
            className={`p-1 font-bold ${
              character.status === "Alive"
                ? "text-primary"
                : character.status === "Dead"
                ? "text-red-500"
                : "text-black"
            }`}
          >
            {character.status}
          </p>
          <p className="p-1 font-bold text-gray-600"> {character.species}</p>
        </div>
        <button onClick={handleFavoriteClick} className="flex items-center">
          {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
          {isFavorite ? (
            <FaHeart className="text-red-600 ml-2" />
          ) : (
            <FaRegHeart className=" ml-2" />
          )}
        </button>
      </div>
      <ModalComponent
        closeModal={() => setShowModal(false)}
        isOpen={showModal}
        onRequestClose={cancelRemoveFavorite}
        maxHeight={200}
        maxWidth={400}
      >
        <div className="mt-2">
          Are you sure you want to remove this character from favorites?
        </div>
        <div className="mt-8 flex justify-evenly items-center bg-white  rounded-lg p-6">
          <button
            onClick={confirmRemoveFavorite}
            className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-opacity-50"
          >
            Yes
          </button>
          <button
            onClick={cancelRemoveFavorite}
            className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-opacity-50"
          >
            No
          </button>
        </div>
      </ModalComponent>
    </div>
  );
};

export default CharacterCard;

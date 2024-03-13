import React, { useEffect, useMemo, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useEpisodesById } from "../../hooks/useEpisodes";
import { useMultipleCharacters } from "../../hooks/useCharacters";
import CharacterCard from "../../components/CharacterCard";

const EpisodeDetailPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { episodeName } = useParams();
  const { state } = useLocation();
  const { id } = state || {};
  const {
    data: episode,
    isLoading: episodeLoading,
    isError: episodeError,
    error: episodeErrorDetail,
  } = useEpisodesById(id);

  const characterIds = useMemo(
    () => episode?.characters?.map((url) => url.split("/").pop()),
    [episode]
  );
  const {
    data: characters,
    isLoading: charactersLoading,
    isError: charactersError,
    error: charactersErrorDetail,
  } = useMultipleCharacters(characterIds || []);

  useEffect(() => {
    console.log(characterIds);
  }, [characterIds]);

  if (episodeLoading || charactersLoading)
    return <div>Loading episode details...</div>;
  if (episodeError || charactersError)
    return (
      <div>
        Error: {episodeErrorDetail?.message || charactersErrorDetail?.message}
      </div>
    );

  return (
    <div>
      <h1 className="text-3xl text-primary">{episodeName}</h1>

      <p className="text-xl text-primary">Air Date: {episode?.air_date}</p>
      <p className="text-xl text-primary">Episode: {episode?.episode}</p>

      <input
        type="text"
        placeholder="Search Character..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4 w-full px-4 mt-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-green-400 focus:ring-1 "
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {characters
          ?.filter(
            (character) =>
              character.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              character.species
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) ||
              character.status.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
      </div>
    </div>
  );
};

export default EpisodeDetailPage;

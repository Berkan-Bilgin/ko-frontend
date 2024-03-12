import React, { useEffect, useMemo } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useEpisodesById } from "../../hooks/useEpisodes";
import { useMultipleCharacters } from "../../hooks/useEpisodes";
import CharacterCard from "../../components/CharacterCard";

const EpisodeDetailPage = () => {
  const { episodeName } = useParams();
  const { state } = useLocation();
  const { id } = state || {};
  const {
    data: episode,
    isLoading: episodeLoading, // Değişken ismi düzeltildi
    isError: episodeError, // Değişken ismi düzeltildi
    error: episodeErrorDetail, // Değişken ismi düzeltildi
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
      <h1>{episodeName}</h1>
      <p>ID: {episode?.id}</p>
      <p>Name: {episode?.name}</p>
      <p>Air Date: {episode?.air_date}</p>
      <p>Episode: {episode?.episode}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {characters?.map((character) => (
          <CharacterCard character={character}></CharacterCard>
        ))}
      </div>
    </div>
  );
};

export default EpisodeDetailPage;

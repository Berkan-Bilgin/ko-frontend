import React, { useEffect, useMemo } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useEpisodesById } from "../../hooks/useEpisodes";
import { useMultipleCharacters } from "../../hooks/useEpisodes";

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
    data: characters, // Değişken ismi düzeltildi
    isLoading: charactersLoading, // Değişken ismi düzeltildi
    isError: charactersError, // Değişken ismi düzeltildi
    error: charactersErrorDetail, // Bu satır eklendi
  } = useMultipleCharacters(characterIds || []);

  useEffect(() => {
    console.log(characterIds);
  }, [characterIds]); // Bağımlılıklar listesi eklendi.

  if (episodeLoading || charactersLoading)
    // Tüm yükleme durumları birleştirildi
    return <div>Loading episode details...</div>;
  if (episodeError || charactersError)
    // Tüm hata durumları birleştirildi
    return (
      <div>
        Error: {episodeErrorDetail?.message || charactersErrorDetail?.message}
      </div>
    ); // Hata mesajları düzeltildi

  return (
    <div>
      <h1>{episodeName}</h1>
      <p>ID: {episode?.id}</p>
      <p>Name: {episode?.name}</p>
      <p>Air Date: {episode?.air_date}</p>
      <p>Episode: {episode?.episode}</p>

      <div>
        {characters?.map((character) => (
          <div key={character?.id}>
            <h3>{character?.name}</h3>
            <img src={character?.image} alt={character?.name} />{" "}
            {/* alt attribute düzeltildi */}
            {/* Diğer karakter detayları */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EpisodeDetailPage;

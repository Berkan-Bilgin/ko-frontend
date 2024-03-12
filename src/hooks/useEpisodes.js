import { useQuery } from "react-query";
import { fetchEpisodes } from "../services/api";
import { fetchEpisodesById } from "../services/api";
import { fetchCharactersById } from "../services/api";

export const useEpisodes = (page) => {
  return useQuery(["episodes", page], () => fetchEpisodes(page), {
    keepPreviousData: true,
  });
};

export const useEpisodesById = (id) => {
  return useQuery(["episodes", id], () => fetchEpisodesById(id), {
    keepPreviousData: true,
  });
};

export const useCharacterById = (id) => {
  return useQuery(["characters", id], () => fetchCharactersById(id), {
    keepPreviousData: true,
  });
};

// export const useMultipleCharacters = (id) => {
//   return useQuery(["characters", id], () => fetchCharactersById(id), {
//     keepPreviousData: true,
//   });
// };

export const useMultipleCharacters = (characterIds) => {
  return useQuery(
    ["characters", { characterIds }],
    () => fetchCharactersById(characterIds),
    {
      enabled: !!characterIds.length, // characterIds array'i dolu olduğunda sorguyu çalıştır
    }
  );
};

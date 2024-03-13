import { fetchCharacters } from "../services/api";
import { fetchCharactersById } from "../services/api";
import { useQuery } from "react-query";

export const useAllCharacters = (page) => {
  return useQuery(["characters", page], () => fetchCharacters(page), {
    keepPreviousData: true,
  });
};

export const useCharacterById = (id) => {
  return useQuery(["characters", id], () => fetchCharactersById(id), {
    keepPreviousData: true,
  });
};

export const useMultipleCharacters = (characterIds) => {
  return useQuery(
    ["characters", { characterIds }],
    () => fetchCharactersById(characterIds),
    {
      enabled: !!characterIds.length,
    }
  );
};

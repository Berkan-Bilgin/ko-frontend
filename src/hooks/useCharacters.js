import { fetchCharacters } from "../services/api";
import { useQuery } from "react-query";

export const useAllCharacters = (page) => {
  return useQuery(["characters", page], () => fetchCharacters(page), {
    keepPreviousData: true,
  });
};

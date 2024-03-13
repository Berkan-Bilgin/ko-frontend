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

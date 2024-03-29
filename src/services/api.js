import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
});

export default apiClient;

export const fetchEpisodes = async (page = 1) => {
  try {
    const response = await apiClient.get(`/episode?page=${page}`);
    console.log("fetchEpisodes data: ", response.data);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Network error occurred");
  }
};

export const fetchEpisodesById = async (id) => {
  try {
    const response = await apiClient.get(`/episode/${id}`);
    console.log("fetchEpisodesById data: ", response.data);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Network error occurred");
  }
};

export const fetchCharactersById = async (id) => {
  try {
    const response = await apiClient.get(`/character/${id}`);
    console.log("fetchCharactersById data: ", response.data);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Network error occurred");
  }
};

export const fetchMultipleCharacters = async (ids) => {
  try {
    const idsQueryParam = ids.join(",");
    const response = await apiClient.get(`/character/${idsQueryParam}`);
    console.log(" fetchMultipleCharacters data: ", response.data);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Network error occurred");
  }
};

export const fetchCharacters = async (page = 1) => {
  try {
    const response = await apiClient.get(`/character/?page=${page}`);
    console.log("fetchCharacters data: ", response.data);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Network error occurred");
  }
};

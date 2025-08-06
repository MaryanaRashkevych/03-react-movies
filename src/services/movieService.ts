import axios from "axios";
import type Movie from "../types/movie";
 

const authorization = import.meta.env.VITE_TMDB_TOKEN;

const baseUrl = 'https://api.themoviedb.org/3/search/movie';

export async function fetchMovies(query: string): Promise<Movie[]> {
  const config = {
    params: {
      query,
      include_adult: false,
      language: "en-US",
      page: 1,
    },
    headers: {
      Authorization: authorization,
    },
  };

  const response = await axios.get(baseUrl, config);
  return response.data.results;
}

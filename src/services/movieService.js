import http from "./httpService";
import { uri } from "../config.json";

const apiEndpoint = uri + "/movies";

export function getMovies() {
  return http.get(apiEndpoint);
}

export function deleteMovie(movieId) {
  return http.delete(`${apiEndpoint}/${movieId}`);
}

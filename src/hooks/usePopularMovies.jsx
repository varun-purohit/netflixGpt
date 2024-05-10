import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../store/slice/moviesSlice";

export const usePopularMovies = () => {
  const dispatch = useDispatch();
  function getPopularMovies() {
    fetch("https://api.themoviedb.org/3/movie/popular?page=1", API_OPTIONS)
      .then((response) => response.json())
      .then((response) => {
        // console.log(response.results);
        dispatch(addPopularMovies(response.results));
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    getPopularMovies();
  }, []);
};

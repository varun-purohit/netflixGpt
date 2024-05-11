import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../store/slice/moviesSlice";

export const usePopularMovies = () => {
  const dispatch = useDispatch();

  const popularMovies = useSelector((store) => store.movies.nowPlayingMovies);

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
    !popularMovies && getPopularMovies();
  }, []);
};

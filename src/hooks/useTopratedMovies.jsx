import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTopratedMovies } from "../store/slice/moviesSlice";

export const useTopratedMovies = () => {
  const dispatch = useDispatch();

  const topratedMovies = useSelector((store) => store.movies.nowPlayingMovies);

  function getTopratedMovies() {
    fetch("https://api.themoviedb.org/3/movie/top_rated?page=1", API_OPTIONS)
      .then((response) => response.json())
      .then((response) => {
        // console.log(response.results);
        dispatch(addTopratedMovies(response.results));
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    !topratedMovies && getTopratedMovies();
  }, []);
};

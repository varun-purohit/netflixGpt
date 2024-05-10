import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../store/slice/moviesSlice";

export const useNowPlayingMoves = () => {
  const dispatch = useDispatch();
  function getNowPlayingMovies() {
    fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", API_OPTIONS)
      .then((response) => response.json())
      .then((response) => {
        // console.log(response.results);
        dispatch(addNowPlayingMovies(response.results));
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

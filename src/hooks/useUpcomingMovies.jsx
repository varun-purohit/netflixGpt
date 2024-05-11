import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../store/slice/moviesSlice";

export const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const upcomingMovies = useSelector((store) => store.movies.nowPlayingMovies);

  function getUpcomingMovies() {
    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    )
      .then((response) => response.json())
      .then((response) => {
        // console.log(response.results);
        dispatch(addUpcomingMovies(response.results));
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    !upcomingMovies && getUpcomingMovies();
  }, []);
};

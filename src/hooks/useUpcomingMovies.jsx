import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../store/slice/moviesSlice";

export const useUpcomingMovies = () => {
  const dispatch = useDispatch();
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
    getUpcomingMovies();
  }, []);
};

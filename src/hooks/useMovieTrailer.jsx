import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../store/slice/moviesSlice";
import { useDispatch } from "react-redux";

export const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  function getMovieVideo() {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, API_OPTIONS)
      .then((response) => response.json())
      .then((data) => {
        const filterData = data.results.filter(
          (video) => video.type === "Trailer"
        );
        const trailer = filterData.length ? filterData[0] : data.results[0];
        dispatch(addTrailerVideo(trailer));
      });
  }

  useEffect(() => {
    getMovieVideo();
  }, []);
};

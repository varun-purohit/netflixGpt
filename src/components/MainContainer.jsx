import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store?.movies?.nowPlayingMovies);
  if (!movies) return;

  const number = Math.trunc(Math.random() * movies.length) + 1;

  const mainMovie = movies[number];
  const { id, original_title, overview } = mainMovie;
  return (
    <div className="pt-[30%] bg-black sm:pt-0  ">
      <VideoTitle title={original_title} description={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;

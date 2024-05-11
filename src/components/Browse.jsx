import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { useNowPlayingMoves } from "../hooks/useNowPlayingMovies";
import { usePopularMovies } from "../hooks/usePopularMovies";
import { useTopratedMovies } from "../hooks/useTopratedMovies";
import { useUpcomingMovies } from "../hooks/useUpcomingMovies";
import { useSelector } from "react-redux";
import Search from "./Search";

const Browse = () => {
  useNowPlayingMoves();
  usePopularMovies();
  useTopratedMovies();
  useUpcomingMovies();

  const showGptSearch = useSelector((store) => store?.gpt?.showGptSearch);

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <Search />
      ) : (
        <>
          {" "}
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;

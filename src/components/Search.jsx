import { BG_URL } from "../utils/constants";
import Header from "./Header";
import MovieSuggestions from "./MovieSuggestions";
import SearchBar from "./SearchBar";

const Search = () => {
  return (
    <div className="">
      <div className="fixed sm:fixed  -z-10">
        <img
          className="h-screen object-cover  md:h-[100%] "
          src={BG_URL}
          alt="background"
        />
      </div>
      <div className="">
        <SearchBar />
        <MovieSuggestions />
      </div>
    </div>
  );
};

export default Search;

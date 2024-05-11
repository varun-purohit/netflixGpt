import { BG_URL } from "../utils/constants";
import Header from "./Header";
import MovieSuggestions from "./MovieSuggestions";
import SearchBar from "./SearchBar";

const Search = () => {
  return (
    <div className="">
      <Header />
      <div className="fixed -z-10">
        <img className=" " src={BG_URL} alt="background" />
      </div>

      <SearchBar />
      <MovieSuggestions />
    </div>
  );
};

export default Search;

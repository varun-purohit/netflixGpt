import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { openai } from "../utils/openAI";
import { API_OPTIONS } from "../utils/constants";
import { addGptMoviesResult } from "../store/slice/gptSlice";

const SearchBar = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  const gptQuery = `Act as a Movie Recommendation system and suggest movies for the query : 
    ${searchText?.current?.value} 
    ". only give me names of 5 movies,, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya`;

  async function handleGptSearch() {
    try {
      const gptResults = await openai.chat.completions.create({
        messages: [{ role: "user", content: gptQuery }],
        model: "gpt-3.5-turbo",
      });

      //   console.log(gptResults.choices?.[0]?.message?.content);
      // Andaz Apna Apna, Hera Pheri, Chupke Chupke, Jaane Bhi Do Yaaro, Padosan
      const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

      // ["Andaz Apna Apna", "Hera Pheri", "Chupke Chupke", "Jaane Bhi Do Yaaro", "Padosan"]

      const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
      // [Promise, Promise, Promise, Promise, Promise]

      const tmdbResults = await Promise.all(promiseArray);

      dispatch(
        addGptMoviesResult({ movieNames: gptMovies, movieResults: tmdbResults })
      );
    } catch (error) {
      setErrorMessage("OpenAI api not working currently ");
    }
  }

  return (
    <div className=" pt-[30%] md:pt-[10%] flex justify-center ">
      <form
        className=" w-3/4 md:w-1/2 grid grid-cols-12  bg-black bg-opacity-45"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="px-4 py-2 m-4 col-span-9 rounded"
          type="text"
          placeholder="What would you like to watch today?"
        />
        <button
          className="py-2 px-2 sm:px-4 my-[15px] mx-2 rounded col-span-3  bg-red-700 hover:bg-red-800"
          onClick={handleGptSearch}
        >
          Search
        </button>
      </form>
      <p className="text-red-600 mb-2">{errorMessage}</p>
    </div>
  );
};

export default SearchBar;

import { IMG_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className=" w-28 sm:w-36 pr-2">
      <img src={`${IMG_URL}${posterPath}`} alt="poster" />
    </div>
  );
};

export default MovieCard;

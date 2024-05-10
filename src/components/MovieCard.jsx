import { IMG_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-36 pr-2">
      <img src={`${IMG_URL}${posterPath}`} alt="poster" />
    </div>
  );
};

export default MovieCard;

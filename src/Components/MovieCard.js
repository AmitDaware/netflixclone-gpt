import React from "react";
import { IMG_CDN_URL } from "../Utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-44 pr-4">
      <img src={IMG_CDN_URL + posterPath} alt="MOVIE CARD" />
    </div>
  );
};

export default MovieCard;

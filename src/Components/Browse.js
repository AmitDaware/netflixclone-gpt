import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies.js";
import useTopRatedMovies from "../hooks/useTopRatedMovies.js";
import MainContainer from "./MainContainer";
import useUpcomingMovies from "../hooks/useUpcomingMovies.js";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();


  return (
    <div>
      <Header />
      <MainContainer/>
    </div>
  );
};

export default Browse;

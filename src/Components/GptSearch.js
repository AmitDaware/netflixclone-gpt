import React, { useRef } from "react";
import { API_OPTIONS, NET_BG } from "../Utils/constants";
import lang from "../Utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../Utils/openai";
import { addGptMovieResult } from "../Utils/GptSearchSlice";
import GptMovieSuggestions from "./GptMovieSuggestions";

const GptSearch = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  //!for each movie I will search TMDB API
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

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);

    //!Make an API call to GPT API and get Movie Results.

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query" +
      searchText.current.value +
      "only give me names of 5 movies, comma separated like the example result given ahead. Example Result: John Wick, The Killer, GodFather, Matrix ";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    console.log(gptResults.choices?.[0]?.message?.content);

    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

    //!here i will get an array of movies separated by comma.

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

    //! here i will get an array of promises
    //! [promise,promise,promise,promise,promise,] like this
    const tmdbResults = await Promise.all(promiseArray);

    console.log(tmdbResults);

    //! below is how you can add multiple data in same ACTION by passing an object { movieNames: gptMovies,movieResults: tmdbResults }↓
    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src={NET_BG}
        alt="Background"
        className="fixed inset-0 object-cover w-full h-full"
      />
      <div className="relative bg-white p-6 max-w-lg w-full mx-auto shadow-md rounded z-10">
        <h1 className="text-2xl font-bold mb-4 text-center">
          GPT Movie Search
        </h1>

        {/* Search Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="text"
            placeholder={lang[langKey].searchPlaceholder}
            ref={searchText}
            className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition duration-300"
            onClick={handleGptSearchClick}
          >
            {lang[langKey].search}
            {/*//! Here lang.langKey.search will not work , why? because there is nothing as langKey in lang object... */}
          </button>
        </form>

        {/* Movie Results Placeholder */}
        <div className="movie-results mt-6">
          <p className="text-center text-gray-500">
            {lang[langKey].movieResults}
          </p>
        </div>
      </div>

      <GptMovieSuggestions />
    </div>
  );
};


export default GptSearch;


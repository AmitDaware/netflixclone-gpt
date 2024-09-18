import React from "react";
import { NET_BG } from "../Utils/constants";
import lang from "../Utils/languageConstants";
import { useSelector } from "react-redux";

const GPTSearch = () => {
  const langKey = useSelector((store) => store.config.lang);

  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src={NET_BG}
        alt="Background"
        className="absolute inset-0 object-cover w-full h-full"
      />
      <div className="relative bg-white p-6 max-w-lg w-full mx-auto shadow-md rounded z-10">
        <h1 className="text-2xl font-bold mb-4 text-center">
          GPT Movie Search
        </h1>

        {/* Search Form */}
        <form>
          <input
            type="text"
            placeholder={lang[langKey].searchPlaceholder}
            className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition duration-300"
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
    </div>
  );
};

export default GPTSearch;

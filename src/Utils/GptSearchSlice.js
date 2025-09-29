import { createSlice } from "@reduxjs/toolkit";

const GptSearchSlice = createSlice({
  name: "GPT",
  initialState: {
    showGptSearch: false,
    movieResults: null,
    movieNames: null,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult: (state, action) => {
      //! here we are extracting the data from action.payload. This is how we did it =>[movieResults: null,movieNames: null,,,,,, const { movieNames, movieResults } = action.payload;state.movieNames = movieNames;state.movieResults = movieResults;]
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
  },
});
export const { toggleGptSearchView, addGptMovieResult } =
  GptSearchSlice.actions;
export default GptSearchSlice.reducer;

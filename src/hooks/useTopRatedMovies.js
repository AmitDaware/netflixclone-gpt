import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../Utils/moviesSlice";

const useTopRated = () => {
    //Fetch data from TMDB API and update store.
    const dispatch = useDispatch();
    const getTopRatedMovies = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
            API_OPTIONS
        );
        const json = await data.json();
        // console.log(json);
        dispatch(addTopRatedMovies(json.results));
    };
    useEffect(() => {
        getTopRatedMovies();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};

export default useTopRated;

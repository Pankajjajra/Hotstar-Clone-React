import { configureStore } from "@reduxjs/toolkit";
import MovieSlice from "./slices/MovieSlice";

const Store = configureStore({
    reducer: {
        movies: MovieSlice,
    },
});

export default Store;

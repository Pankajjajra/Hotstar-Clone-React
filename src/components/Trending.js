import React from "react";
import MovieCardWrap from "./MovieCardWrap";
import { getTrending } from "../redux/slices/MovieSlice";
import { useSelector } from "react-redux/es/exports";

const Trending = () => {
    const trending = useSelector((state) => getTrending(state));
    return (
        <div className="py-8">
            <h4 className="mb-5 text-2xl">Trending</h4>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                {trending.map((item, i) => {
                    return (
                        <div key={i}>
                            <MovieCardWrap id={item.id} img={item.cardImg} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Trending;

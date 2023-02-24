import React from "react";
import MovieCardWrap from "./MovieCardWrap";
import { getRecommended } from "../redux/slices/MovieSlice";
import { useSelector } from "react-redux/es/exports";

const Recommended = () => {
    const recommended = useSelector((state) => getRecommended(state));
    return (
        <div className="py-8">
            <h4 className="mb-5 text-2xl">Recommended For You</h4>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                {recommended.map((item, i) => {
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

export default Recommended;

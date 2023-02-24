import React from "react";
import MovieCardWrap from "./MovieCardWrap";
import { getNew } from "../redux/slices/MovieSlice";
import { useSelector } from "react-redux/es/exports";

const New = () => {
    const newmovies = useSelector((state) => getNew(state));
    return (
        <div className="py-8">
            <h4 className="mb-5 text-2xl">New to Disney+</h4>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                {newmovies.map((item, i) => {
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

export default New;

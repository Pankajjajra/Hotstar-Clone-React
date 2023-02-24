import React from "react";
import MovieCardWrap from "./MovieCardWrap";
import { getOriginal } from "../redux/slices/MovieSlice";
import { useSelector } from "react-redux/es/exports";

const Original = () => {
    const original = useSelector((state) => getOriginal(state));
    return (
        <div className="py-8">
            <h4 className="mb-5 text-2xl">Disney Originals</h4>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                {original.map((item, i) => {
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

export default Original;

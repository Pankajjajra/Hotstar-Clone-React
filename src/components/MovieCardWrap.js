import React from "react";
import { Link } from "react-router-dom";

const MovieCardWrap = (props) => {
    return (
        <div className="cursor-pointer overflow-hidden rounded-xl border-[3px] border-viewer-border  shadow-viewer transition-all duration-200 ease-viewer hover:scale-105 hover:border-recommended hover:shadow-viewer">
            <Link to={`detail/${props.id}`}>
                <img src={props.img} className="h-full w-full" alt="" />
            </Link>
        </div>
    );
};

export default MovieCardWrap;

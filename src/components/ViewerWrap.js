import React from "react";

const ViewerWrap = (props) => {
    return (
        <div className="relative cursor-pointer overflow-hidden rounded-xl border-[3px]  border-viewer-border pt-[55.25%] shadow-viewer transition-all duration-300 ease-viewer hover:scale-105 hover:shadow-viewer-hover video-hover:opacity-100">
            <img
                className="absolute top-0 z-10 transition-all duration-500  ease-in-out hover:opacity-0"
                src={props.img}
                alt=""
            />
            <video
                src={props.video}
                autoPlay={true}
                loop={true}
                playsInline={true}
                className="absolute top-0 aspect-video h-fit  w-full opacity-0 transition-all duration-500 ease-in-out"
            ></video>
        </div>
    );
};

export default ViewerWrap;

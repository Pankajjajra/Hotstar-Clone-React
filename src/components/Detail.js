import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { BsFillPlayFill, BsPlusLg } from "react-icons/bs";
import Group from "../assets/images/group-icon.png";
import { useSelector } from "react-redux";

const Detail = () => {
    let data = useSelector((state) => state.movies.value);
    const { id } = useParams();
    const [movie, setMovie] = useState({});

    useEffect(() => {
        setMovie(data.filter((item) => item.id === id));
        console.log(movie);
    }, [id]);

    return (
        <>
            <Navbar />
            <div className="detail bg-[linear-] relative mt-[85px] min-h-[calc(100vh-85px)] w-full bg-gradient-to-r from-[rgba(0,0,0,0.4)]">
                <img
                    src={movie[0]?.backgroundImg}
                    className="absolute top-0 left-0 right-0 bottom-0 -z-10 h-[calc(100vh-85px)] w-full object-cover"
                    alt=""
                />
                <div className="ml-4 mr-6 flex max-w-[600px] flex-col justify-start pt-8 md:mr-0 md:ml-12 md:pt-14">
                    <img
                        src={movie[0]?.titleImg}
                        alt=""
                        className="mb-12 min-w-[100px] max-w-[500px]"
                    />
                    <div className="cta mb-7 flex items-center gap-2 md:gap-3">
                        <button className="flex items-center justify-center  gap-1 rounded border border-white bg-white py-2 pl-2 pr-4 md:py-3 md:pl-3 md:pr-5">
                            <BsFillPlayFill className="text-3xl text-black" />
                            <p className="uppercase tracking-[3px] text-black">
                                play
                            </p>
                        </button>
                        <button className="flex items-center justify-center gap-1 rounded border border-white bg-[rgba(0,0,0,0.3)] py-2 pl-2 pr-4 md:py-3 md:pl-3 md:pr-5">
                            <BsFillPlayFill className=" text-3xl text-white" />
                            <p className="uppercase tracking-[3px] text-white">
                                Trailer
                            </p>
                        </button>
                        <button className="flex h-12 w-12 items-center justify-center rounded-full border-[3px] border-white bg-[rgba(0,0,0,0.5)] md:h-14 md:w-14">
                            <BsPlusLg className="text-xl" />
                        </button>
                        <button className="flex h-12 w-12 items-center justify-center rounded-full border-[3px] border-white bg-black md:h-14 md:w-14">
                            <img src={Group} className="" alt="" />
                        </button>
                    </div>
                    <p className="mb-4 text-lg">{movie[0]?.subTitle}</p>
                    <p className="text-lg">{movie[0]?.description}</p>
                </div>
            </div>
        </>
    );
};

export default Detail;

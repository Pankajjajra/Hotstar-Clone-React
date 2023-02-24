import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide1 from "../assets/images/slider-badging.jpg";
import Slide2 from "../assets/images/slider-scale.jpg";
import Slide3 from "../assets/images/slider-badag.jpg";
import Slide4 from "../assets/images/slider-scales.jpg";
import Slider from "react-slick";
import styled from "styled-components";

const ImgSlider = () => {
    let setting = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slideToScroll: 1,
        autoPlay: true,
    };
    const Carousel = styled(Slider)`
        margin-top: 20px;
        & > button {
            opacity: 0;
            height: 100%;
            width: 5vw;
            z-index: 1;
            &:hover {
                opacity: 1;
                transition: opacity 0.2s ease 0s;
            }
        }
        ul li button {
            &:before {
                font-size: 10px;
                color: rgb(150, 158, 171);
            }
        }
        li.slick-active button:before {
            color: white;
        }
        .slick-list {
            overflow: initial;
        }
        .slick-prev {
            left: -45px;
        }
        .slick-next {
            right: -45px;
        }
    `;
    const Wrap = styled.div`
        border-radius: 4px;
        cursor: pointer;
        position: relative;
        a {
            border-radius: 4px;
            box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
                rgb(0 0 0 / 73%) 0px 16px 10px -10px;
            cursor: pointer;
            display: block;
            position: relative;
            padding: 4px;
            img {
                width: 100%;
                height: 100%;
            }
            &:hover {
                padding: 0;
                border: 4px solid rgba(249, 249, 249, 0.8);
                transition-duration: 300ms;
            }
        }
    `;
    return (
        <Carousel {...setting}>
            <Wrap>
                <a>
                    <img src={Slide1} alt="" />
                </a>
            </Wrap>

            <Wrap>
                <a>
                    <img src={Slide2} alt="" />
                </a>
            </Wrap>

            <Wrap>
                <a>
                    <img src={Slide3} alt="" />
                </a>
            </Wrap>

            <Wrap>
                <a>
                    <img src={Slide4} alt="" />
                </a>
            </Wrap>
        </Carousel>
    );
};

export default ImgSlider;

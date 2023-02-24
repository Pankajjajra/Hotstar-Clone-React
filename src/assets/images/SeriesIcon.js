import React from "react";

const SeriesIcon = (props) => {
    return (
        <svg
            fill="#fff"
            width={props.width}
            height={props.width}
            viewBox="0 0 36 36"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M18.84 11.965h6.722a4 4 0 0 1 4 4V26a4 4 0 0 1-4 4H10.375a4 4 0 0 1-4-4V15.965a4 4 0 0 1 4-4h6.211l-3.981-3.981a1.162 1.162 0 1 1 1.643-1.644l3.465 3.465 3.464-3.465a1.162 1.162 0 0 1 1.644 1.644l-3.982 3.981zm6.428 7.73a1.718 1.718 0 1 0 0-3.436 1.718 1.718 0 0 0 0 3.436zm0 6.011a1.718 1.718 0 1 0 0-3.435 1.718 1.718 0 0 0 0 3.435z"
            ></path>
        </svg>
    );
};

export default SeriesIcon;

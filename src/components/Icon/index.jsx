import React from "react";

const Icon = ({ type }) => {
    switch (type) {
        case "globe":
            return (
                <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg">
                    <g
                        stroke="#111"
                        strokeWidth="1"
                        fill="none"
                        fillRule="evenodd"
                    >
                        <path d="M11.777.572v22.411M.572 11.777h22.41M1.864 6.548H21.69M1.864 17.007H21.69" />
                        <path
                            d="M11.777.572c3.506 0 6.351 5.017 6.351 11.205 0 6.189-2.845 11.206-6.35 11.206-3.507 0-6.35-5.017-6.35-11.206C5.427 5.59 8.27.572 11.777.572z"
                            strokeLinecap="square"
                        />
                        <path
                            d="M11.777.572c6.189 0 11.206 5.017 11.206 11.205 0 6.189-5.017 11.206-11.206 11.206C5.59 22.983.571 17.966.571 11.777.571 5.59 5.59.572 11.777.572z"
                            strokeLinecap="square"
                        />
                    </g>
                </svg>
            );
        default:
            return null;
    }
};

export default Icon;

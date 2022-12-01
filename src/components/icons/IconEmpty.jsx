import React from "react";

const IconEmpty = ({
    width = "20px",
    height = "20px",
    fill = "#000",
    ...props
}) => {
    return (
        <svg
            {...props}
            width={width}
            height={height}
            viewBox="0 0 20 20"
            version="1.1"
        >
            <g
                id="Page-1"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
            >
                <g
                    id="Dribbble-Light-Preview"
                    transform="translate(-300.000000, -999.000000)"
                    fill={fill}
                >
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                        <path
                            d="M258,853 L258,852 C258,851.448 258.448,851 259,851 L262,851 L262,856 C262,856.552 261.552,857 261,857 L247,857 C246.448,857 246,856.552 246,856 L246,851 L249,851 C249.552,851 250,851.448 250,852 L250,853 C250,854.105 250.895,855 252,855 L256,855 C257.105,855 258,854.105 258,853 L258,853 Z M256,851 L256,853 L252,853 L252,851 C252,849.895 251.105,849 250,849 L246,849 L247.6,841 L260.4,841 L262,849 L258,849 C256.895,849 256,849.895 256,851 L256,851 Z M264,849 L262.161,839.804 C262.067,839.336 261.657,839 261.18,839 L246.82,839 C246.343,839 245.933,839.336 245.839,839.804 L244,849 L244,857 C244,858.105 244.895,859 246,859 L262,859 C263.105,859 264,858.105 264,857 L264,849 Z"
                            id="inbox_empty_round-[#1553]"
                        ></path>
                    </g>
                </g>
            </g>
        </svg>
    );
};

export default IconEmpty;

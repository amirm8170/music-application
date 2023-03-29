import React from "react";

interface props {
  width: number;
  height: number;
  color?: string;
}
const HeartFillIcon = ({ width, height, color }: props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 1.97101C18.6575 -4.87199 35.3014 7.10325 12 22.5C-11.3014 7.10325 5.34246 -4.87199 12 1.97101Z"
        fill={color}
      />
    </svg>
  );
};

export default HeartFillIcon;

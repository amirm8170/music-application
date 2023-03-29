import React from "react";

interface props {
  width: number;
  height: number;
  color?: string;
}

const CameraIcon = ({ width, height, color }: props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 3.5C0 1.84315 1.34315 0.5 3 0.5H14.25C15.7737 0.5 17.0321 1.63599 17.2245 3.10725L21.8908 1.03335C22.8827 0.592497 24 1.31858 24 2.40407V13.5959C24 14.6814 22.8827 15.4075 21.8908 14.9666L17.2245 12.8927C17.0321 14.364 15.7737 15.5 14.25 15.5H3C1.34315 15.5 0 14.1569 0 12.5V3.5ZM17.25 11.2626L22.5 13.5959L22.5 2.40407L17.25 4.73741V11.2626ZM3 2C2.17157 2 1.5 2.67157 1.5 3.5V12.5C1.5 13.3284 2.17157 14 3 14H14.25C15.0784 14 15.75 13.3284 15.75 12.5V3.5C15.75 2.67157 15.0784 2 14.25 2H3Z"
        fill={color}
      />
    </svg>
  );
};

export default CameraIcon;

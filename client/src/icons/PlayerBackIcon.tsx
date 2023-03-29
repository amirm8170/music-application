import React from "react";

interface props {
  width: number;
  height: number;
  color?: string;
}

const PlayerBackIcon = ({ width, height, color }: props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 17 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 1C0 0.447715 0.447715 0 1 0C1.55228 0 2 0.447715 2 1V7.49539L14.5331 0.224317C15.6137 -0.402583 16.9987 0.355651 16.9987 1.61692V16.3844C16.9987 17.6457 15.6137 18.4039 14.5331 17.777L2 10.5059V17C2 17.5523 1.55228 18 1 18C0.447715 18 0 17.5523 0 17V1Z"
        fill={color}
      />
    </svg>
  );
};

export default PlayerBackIcon;

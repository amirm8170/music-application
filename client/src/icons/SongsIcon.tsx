import React from "react";

interface props {
  width: number;
  height: number;
  color?: string;
}

const SongsIcon = ({ width, height, color }: props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.5 18.5009C7.5 20.1577 5.82107 21.5009 3.75 21.5009C1.67893 21.5009 0 20.1577 0 18.5009C0 16.844 1.67893 15.5009 3.75 15.5009C5.82107 15.5009 7.5 16.844 7.5 18.5009Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.5 3.50088V18.5009H6V3.50088H7.5Z"
        fill={color}
      />
      <path
        d="M6 3.23059C6 2.51557 6.50469 1.89994 7.20583 1.75972L11.7058 0.859717C12.634 0.674079 13.5 1.38402 13.5 2.33059V5.00088L6 6.50088V3.23059Z"
        fill={color}
      />
    </svg>
  );
};

export default SongsIcon;

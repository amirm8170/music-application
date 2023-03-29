import React from "react";

interface props {
    width: number;
    height: number;
    color?: string;
  }
  
  const SearchIconSelected = ({ width, height, color }: props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.75 21C12.8567 21 14.8161 20.3639 16.4451 19.2735L22.0858 24.9142C22.8668 25.6953 24.1332 25.6953 24.9142 24.9142C25.6953 24.1332 25.6953 22.8668 24.9142 22.0858L19.2735 16.4451C20.3639 14.8161 21 12.8567 21 10.75C21 5.08908 16.4109 0.5 10.75 0.5C5.08908 0.5 0.5 5.08908 0.5 10.75C0.5 16.4109 5.08908 21 10.75 21ZM18.5 10.75C18.5 15.0302 15.0302 18.5 10.75 18.5C6.46979 18.5 3 15.0302 3 10.75C3 6.46979 6.46979 3 10.75 3C15.0302 3 18.5 6.46979 18.5 10.75Z"
        fill={color}
        stroke={color}
      />
    </svg>
  );
};

export default SearchIconSelected;

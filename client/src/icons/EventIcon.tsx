import React from "react";

interface props {
  width: number;
  height: number;
  color?: string;
}

const EventIcon = ({ width, height, color }: props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 2.75C0 1.50736 1.00736 0.5 2.25 0.5H21.75C22.9926 0.5 24 1.50736 24 2.75V5C24 5.41421 23.6642 5.75 23.25 5.75C22.0074 5.75 21 6.75736 21 8C21 9.24264 22.0074 10.25 23.25 10.25C23.6642 10.25 24 10.5858 24 11V13.25C24 14.4926 22.9926 15.5 21.75 15.5H2.25C1.00736 15.5 0 14.4926 0 13.25V11C0 10.5858 0.335786 10.25 0.75 10.25C1.99264 10.25 3 9.24264 3 8C3 6.75736 1.99264 5.75 0.75 5.75C0.335786 5.75 0 5.41421 0 5V2.75ZM2.25 2C1.83579 2 1.5 2.33579 1.5 2.75V4.32501C3.21168 4.67247 4.5 6.18578 4.5 8C4.5 9.81422 3.21168 11.3275 1.5 11.675V13.25C1.5 13.6642 1.83579 14 2.25 14H21.75C22.1642 14 22.5 13.6642 22.5 13.25V11.675C20.7883 11.3275 19.5 9.81422 19.5 8C19.5 6.18578 20.7883 4.67247 22.5 4.32501V2.75C22.5 2.33579 22.1642 2 21.75 2H2.25Z"
        fill={color}
      />
    </svg>
  );
};

export default EventIcon;

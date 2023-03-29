import React from "react";
interface props{
  width:number
  height:number
  color?:string
}
const HomeIconSeleted = ({width , height , color}:props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.0607 1.24989C12.4749 0.664102 11.5251 0.664099 10.9393 1.24989L0.96967 11.2196C0.676777 11.5125 0.676777 11.9873 0.96967 12.2802C1.26256 12.5731 1.73744 12.5731 2.03033 12.2802L12 2.31055L21.9697 12.2802C22.2626 12.5731 22.7374 12.5731 23.0303 12.2802C23.3232 11.9873 23.3232 11.5125 23.0303 11.2196L19.5 7.68923V2.74989C19.5 2.33567 19.1642 1.99989 18.75 1.99989H17.25C16.8358 1.99989 16.5 2.33567 16.5 2.74989V4.68923L13.0607 1.24989Z"
        fill={color}
      />
      <path
        d="M12 3.93923L21 12.9392V19.2499C21 20.4925 19.9926 21.4999 18.75 21.4999H5.25C4.00736 21.4999 3 20.4925 3 19.2499V12.9392L12 3.93923Z"
        fill={color}
      />
    </svg>
  );
};

export default HomeIconSeleted;

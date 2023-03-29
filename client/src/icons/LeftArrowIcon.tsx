interface props {
  width: number;
  height: number;
  color?: string;
}
const LeftArrowIcon = ({ width, height, color }: props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 6C12 6.41421 11.6642 6.75 11.25 6.75L2.56066 6.75L5.78033 9.96967C6.07322 10.2626 6.07322 10.7374 5.78033 11.0303C5.48744 11.3232 5.01256 11.3232 4.71967 11.0303L0.219669 6.53033C-0.0732231 6.23744 -0.0732231 5.76256 0.219669 5.46967L4.71967 0.96967C5.01256 0.676777 5.48744 0.676777 5.78033 0.96967C6.07322 1.26256 6.07322 1.73744 5.78033 2.03033L2.56066 5.25L11.25 5.25C11.6642 5.25 12 5.58579 12 6Z"
        fill={color}
      />
    </svg>
  );
};

export default LeftArrowIcon;

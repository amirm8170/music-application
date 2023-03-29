interface props {
  width: number;
  height: number;
  color?: string;
}
const PlayerPause = ({ width, height, color }: props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16ZM12.5 10C11.1193 10 10 11.1193 10 12.5V19.5C10 20.8807 11.1193 22 12.5 22C13.8807 22 15 20.8807 15 19.5V12.5C15 11.1193 13.8807 10 12.5 10ZM19.5 10C18.1193 10 17 11.1193 17 12.5V19.5C17 20.8807 18.1193 22 19.5 22C20.8807 22 22 20.8807 22 19.5V12.5C22 11.1193 20.8807 10 19.5 10Z"
        fill={color}
      />
    </svg>
  );
};

export default PlayerPause;

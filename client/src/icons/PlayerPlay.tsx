interface props {
  width: number;
  height: number;
  color?: string;
}

const PlayerPlay = ({ width, height, color }: props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24ZM20.3719 15.2794C19.9146 14.9528 19.3132 14.9091 18.8136 15.1663C18.314 15.4234 18 15.9381 18 16.5V31.5C18 32.0619 18.314 32.5766 18.8136 32.8338C19.3132 33.0909 19.9146 33.0472 20.3719 32.7206L30.8719 25.2206C31.2661 24.939 31.5 24.4844 31.5 24C31.5 23.5156 31.2661 23.061 30.8719 22.7794L20.3719 15.2794Z"
        fill={color}
      />
    </svg>
  );
};

export default PlayerPlay;

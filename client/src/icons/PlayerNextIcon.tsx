interface props {
  width: number;
  height: number;
  color?: string;
}

const PlayerNextIcon = ({ width, height, color }: props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.5 1C17.5 0.447715 17.0523 0 16.5 0C15.9477 0 15.5 0.447715 15.5 1V7.49617L2.96559 0.224317C1.885 -0.402583 0.5 0.355651 0.5 1.61692V16.3844C0.5 17.6457 1.885 18.4039 2.96559 17.777L15.5 10.5051V17C15.5 17.5523 15.9477 18 16.5 18C17.0523 18 17.5 17.5523 17.5 17V1Z"
        fill={color}
      />
    </svg>
  );
};

export default PlayerNextIcon;

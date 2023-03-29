
interface props {
  width: number;
  height: number;
  color?: string;
}

const EventIconSelected = ({ width, height, color }: props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.25 0.5C1.00736 0.5 0 1.50736 0 2.75V5C0 5.41421 0.335786 5.75 0.75 5.75C1.99264 5.75 3 6.75736 3 8C3 9.24264 1.99264 10.25 0.75 10.25C0.335786 10.25 0 10.5858 0 11V13.25C0 14.4926 1.00736 15.5 2.25 15.5H21.75C22.9926 15.5 24 14.4926 24 13.25V11C24 10.5858 23.6642 10.25 23.25 10.25C22.0074 10.25 21 9.24264 21 8C21 6.75736 22.0074 5.75 23.25 5.75C23.6642 5.75 24 5.41421 24 5V2.75C24 1.50736 22.9926 0.5 21.75 0.5H2.25Z"
        fill={color}
      />
    </svg>
  );
};

export default EventIconSelected;

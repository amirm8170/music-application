import React from "react";
interface props {
  width: number;
  height: number;
  color?: string;
}

const ValumeIcon = ({ width, height, color }: props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 1.00001C12 0.615604 11.7797 0.265226 11.4332 0.0987061C11.0867 -0.0678138 10.6755 -0.0209954 10.3753 0.219141L5.64922 4.00001H1C0.447715 4.00001 0 4.44772 0 5.00001V13C0 13.5523 0.447715 14 1 14H5.64922L10.3753 17.7809C10.6755 18.021 11.0867 18.0678 11.4332 17.9013C11.7797 17.7348 12 17.3844 12 17V1.00001Z"
        fill={color}
      />
      <path
        d="M18.0503 8.99995C18.0503 11.4852 17.0429 13.7352 15.4142 15.3639L14 13.9497C15.2668 12.6829 16.0503 10.9329 16.0503 8.99995C16.0503 7.06695 15.2668 5.31695 14 4.0502L15.4142 2.63599C17.0429 4.26467 18.0503 6.51467 18.0503 8.99995Z"
        fill={color}
      />
    </svg>
  );
};

export default ValumeIcon;

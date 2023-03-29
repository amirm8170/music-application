import RightArrowIcon from "../../icons/RightArrowIcon";
import LeftArrowIcon from "../../icons/LeftArrowIcon";
import { pallet } from "../../layout/pallet";
import "./Carousel.scss";
import CarouselItem from "./item/CarouselItem";
import { useRef } from "react";

interface propsType {
  title: string;
  radius: string;
  items: { title: string; id: number }[];
}

const Carousel = ({ title, radius, items }: propsType) => {
  const scrollElement: React.LegacyRef<HTMLDivElement> | undefined =
    useRef(null);
  const scroll = (scrollOffset: number) => {
    if (scrollElement.current) {
      scrollElement.current.scrollTo({
        left: scrollElement.current.scrollLeft + scrollOffset,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="carousel-container">
      <div className="carousel-titel-container">
        <h2 className="carousel-titel">{title}</h2>
        <div className="carousel-title-btn-container">
          <span className="carousel-arrow-btn" onClick={() => scroll(-420)}>
            <LeftArrowIcon
              width={10.5}
              height={12}
              color={pallet.yellow.yellow1}
            />
          </span>
          <span className="carousel-arrow-btn" onClick={() => scroll(+420)}>
            <RightArrowIcon
              width={10.5}
              height={12}
              color={pallet.yellow.yellow1}
            />
          </span>
        </div>
      </div>
      <div className="carousel-items-container" ref={scrollElement}>
        {items.map((item) => (
          <CarouselItem key={item.id} radius={radius} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Carousel;

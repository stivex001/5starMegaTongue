import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Card from "./Card";
import { useRef } from "react";

const Review = () => {
  const flexBetween = "flex items-center justify-between";
  const cardContainerRef = useRef(null);

  const scrollLeft = () => {
    cardContainerRef.current?.scrollBy({
      left: -500,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    cardContainerRef.current?.scrollBy({
      left: 500,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full h-full">
      <div className="sm:w-5/6 sm:mx-auto my-6 ">
        <div className={`sm:${flexBetween}`}>
          <div>
            <span className="text-purple-20 text-sm font-medium">
              What customers say
            </span>
            <p className="text-dark-20 text-4xl font-bold py-5 sm:py-0">
              Recent Reviews
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-4">
            <div
              className="flex items-center justify-center py-3 px-6 bg-[rgba(18, 17, 39, 0.04)] rounded-[100px] cursor-pointer"
              onClick={scrollLeft}
            >
              <BsArrowLeft size={24} />
            </div>
            <div
              className="flex items-center justify-center py-3 px-6 bg-purple-20 rounded-[100px] text-white cursor-pointer"
              onClick={scrollRight}
            >
              <BsArrowRight size={24} />
            </div>
          </div>
        </div>
        <div
          className="flex items-center gap-6 sm:mt-[41px] overflow-hidden card-container"
          style={{
            overflowX: "scroll",
            scrollbarWidth: "none",
            WebkitOverflowScrolling: "touch",
          }}
          ref={cardContainerRef}
        >
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Review;

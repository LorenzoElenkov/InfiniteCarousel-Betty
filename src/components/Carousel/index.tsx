import { UIEvent, useEffect, useRef, useState } from "react";
import CarouselItem from "./CarouseItem";
import CarouselContainer from "./CarouselContainer";

interface ICarousel {
  images: string[];
}

const ONE_REM_UNIT = 16;

const getAdjacentIndexes = (currentIndex: number, maxIndex: number) => {
  const nextPrevIndexArray: [number, number] = [
    currentIndex - 1,
    currentIndex + 1,
  ];
  if (nextPrevIndexArray[0] < 0) nextPrevIndexArray.splice(0, 1, maxIndex);
  if (nextPrevIndexArray[1] > maxIndex) nextPrevIndexArray.splice(1, 1, 0);
  return nextPrevIndexArray;
};

const Carousel: React.FC<ICarousel> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [prevIndex, nextIndex] = getAdjacentIndexes(
    currentImageIndex,
    images.length - 1
  );

  const carouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!carouselRef.current) return;
    carouselRef.current.scrollLeft = carouselRef.current.clientWidth;
  }, [currentImageIndex]);

  const handleScroll = (e: UIEvent<HTMLDivElement>) => {
    if (e.currentTarget.scrollLeft <= 0) {
      return setCurrentImageIndex((prevState) => {
        if (prevState - 1 < 0) return images.length - 1;
        return prevState - 1;
      });
    }
    if (
      Math.floor(e.currentTarget.scrollLeft) >=
      e.currentTarget.clientWidth * 2 + ONE_REM_UNIT * 2
    ) {
      return setCurrentImageIndex((prevState) => {
        if (prevState + 1 > images.length - 1) return 0;
        return prevState + 1;
      });
    }
  };

  return (
    <CarouselContainer handleScroll={handleScroll} ref={carouselRef}>
      {images.length > 1 ? (
        <>
          <CarouselItem src={images[prevIndex]} />
          <CarouselItem src={images[currentImageIndex]} />
          <CarouselItem src={images[nextIndex]} />
        </>
      ) : (
        <CarouselItem src={images[currentImageIndex]} />
      )}
    </CarouselContainer>
  );
};

export default Carousel;

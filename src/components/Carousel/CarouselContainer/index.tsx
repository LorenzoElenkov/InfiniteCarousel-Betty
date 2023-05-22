import { UIEvent, forwardRef } from "react";
import styles from "./CarouselContainer.module.css";

interface ICarouselContainer {
  children: React.ReactNode;
  handleScroll: (e: UIEvent<HTMLDivElement>) => void;
}

const CarouselContainer = forwardRef<HTMLDivElement, ICarouselContainer>(
  ({ children, handleScroll }, ref) => {
    return (
      <div
        className={styles.carouselContainer}
        ref={ref}
        onScroll={handleScroll}
      >
        {children}
      </div>
    );
  }
);

export default CarouselContainer;

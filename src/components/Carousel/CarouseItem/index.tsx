import styles from "./CarouselItem.module.css";

interface ICarouselItem {
  src: string;
}

const CarouselItem: React.FC<ICarouselItem> = ({ src }) => {
  return <img className={styles.carouselItem} src={src} alt="" />;
};

export default CarouselItem;

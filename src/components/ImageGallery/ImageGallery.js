import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({ images, largeImage }) => {
  return (
    <ul className={s.ImageGallery}>
      {images.map(({ id, webformatURL, largeImageURL }) => {
        const handleItemClick = () => largeImage(largeImageURL);
        return <ImageGalleryItem imageUrl={webformatURL} key={id} openLarge={handleItemClick} />;
      })}
    </ul>
  );
};

export default ImageGallery;

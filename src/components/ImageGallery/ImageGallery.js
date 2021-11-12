import propTypes from 'prop-types';
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

ImageGallery.propTypes = {
  largeImage: propTypes.func.isRequired,
  images: propTypes.array.isRequired,
};

export default ImageGallery;
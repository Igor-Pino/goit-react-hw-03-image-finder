import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ imageUrl, openLarge }) => {
  return (
    <li className={s.ImageGalleryItem}>
      <img src={imageUrl} alt="" className={s.ImageGalleryItem_image} onClick={openLarge} />
    </li>
  );
};

export default ImageGalleryItem;

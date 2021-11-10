import React from 'react';
import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ imageUrl, largeImageURL, descr }) => {
  return (
    <li className={s.ImageGalleryItem}>
      <img src={imageUrl} alt={descr} className={s.ImageGalleryItem_image} />
    </li>
  );
};

export default ImageGalleryItem;

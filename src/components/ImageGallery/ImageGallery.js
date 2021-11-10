import { Component } from 'react';
import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem';
import PicturesApi from '../../services/GetImageApi';
import Button from '../Button';

export default class ImageGallery extends Component {
  state = {
    images: null,
    error: null,
    page: 1,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevRequest = prevProps.imageQuery;
    const newRequest = this.props.imageQuery;
    const page = this.state.page;
    const API_KEY = '23521074-c1847750f84d7ba2d97c15f75';

    if (prevRequest !== newRequest) {
      this.setState({ status: 'pending' });

      PicturesApi.fetchPictures(newRequest, page, API_KEY)
        .then(images => this.setState({ images, status: 'resolved' }))
        .catch(error => this.state({ error, status: 'rejected' }));
    }
  }

  onLoadMore = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };

  render() {
    const { images, error, status } = this.state;

    if (status === 'idle') {
      return <p>input something to search</p>;
    }

    if (status === 'pending') {
      return <p>loading...</p>;
    }

    if (status === 'rejected') {
      return <p>{error.message}</p>;
    }

    if (status === 'resolved') {
      return (
        <ul className={s.ImageGallery}>
          {images.hits.map(hit => (
            <ImageGalleryItem
              imageUrl={hit.webformatURL}
              key={hit.id}
              id={hit.id}
              largeImageURL={hit.largeImageURL}
              descr={hit.tags}
            />
          ))}
          <Button onClick={this.onLoadMore} />
        </ul>
      );
    }
  }
}

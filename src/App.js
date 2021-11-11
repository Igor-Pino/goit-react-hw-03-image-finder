import { Component } from 'react';
import SearchBar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import fetchApi from './services/GetImageApi';
import Modal from './components/Modal';

class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    largeImage: '',
    page: 1,
    isLoading: false,
    showModal: false,
    error: '',
    amount: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
    if (this.state.page !== 2 && prevState.page !== this.state.page) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  fetchImages = () => {
    const { page, searchQuery } = this.state;

    this.setState({ isLoading: true });

    fetchApi({ page, searchQuery })
      .then(images => {
        this.setState(prevState => ({
          images: [...prevState.images, ...images],
          page: prevState.page + 1,
          amount: images.length,
        }));
      })
      .catch(error => this.setState({ error: 'Picture not found' }))
      .finally(() => this.setState({ isLoading: false }));
  };

  handlerSearcQuery = ({ query }) => {
    this.setState({ searchQuery: query });
  };

  toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal,
    }));
  };

  getLargeImage = (largeImage = '') => {
    this.setState({ largeImage });

    this.toggleModal();
  };

  render() {
    const { images, showModal, largeImage, isLoading, amount } = this.state;

    return (
      <div>
        <SearchBar handlerSearcQuery={this.handlerSearcQuery} />

        {images.length === 0 && <p>nothing there</p>}

        <ImageGallery images={images} largeImage={this.getLargeImage} />

        {amount >= 11 && !isLoading && <Button loadMore={this.fetchImages} />}

        {showModal && (
          <Modal showModal={this.getLargeImage}>
            <img src={largeImage} alt="" />
          </Modal>
        )}
      </div>
    );
  }
}

export default App;

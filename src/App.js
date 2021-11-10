import { Component } from 'react';

import SearchBar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';

class App extends Component {
  state = {
    searchQuery: null,
  };

  handlerSearcQuery = ({ query }) => {
    this.setState({ searchQuery: query });
  };

  render() {
    const { searchQuery } = this.state;
    return (
      <div>
        <SearchBar onSubmit={this.handlerSearcQuery} />
        <ImageGallery imageQuery={searchQuery} />
      </div>
    );
  }
}

export default App;

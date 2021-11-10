import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './SearchForm.module.css';

class SearchBar extends Component {
  state = {
    query: '',
  };

  reset = () => {
    this.setState({ query: '' });
  };

  handelerChange = e => {
    const { value } = e.currentTarget;

    this.setState({ query: value });
  };

  handlerSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  render() {
    const { query } = this.state;
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.handlerSubmit}>
          <button type="submit" className={s.SearchForm_button}>
            <span className={s.SearchForm_button_label}>Search</span>
          </button>

          <input
            className={s.SearchForm_input}
            value={query}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            onChange={this.handelerChange}
          />
        </form>
      </header>
    );
  }
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
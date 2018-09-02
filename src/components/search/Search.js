import React, { Component } from 'react';
import qs from 'query-string';
import PropTypes from 'prop-types';
// import './Search.css';

class Search extends Component {

  state = {
    artist: '',
    title: ''
  };

  static propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
  };

  componentDidMount() {
    const { location } = this.props;
    const { artist = '', title = '' } = qs.parse(location.artist, location.title);
    this.setState({ artist, title });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { artist, title } = this.state;
    if(!artist && title) return;
    
    const { history } = this.props;
    history.push({
      pathname: '/search',
      search: qs.stringify({ artist, title, page: 1 })
    });
  };

  handleChangeSearch = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };
  
  render() {
    const { artist, title } = this.state;

    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <label>
          Search for Music: &nbsp;
          <p>Artist:
            <input name={artist} value={artist} onChange={this.handleChangeSearch}/>
          </p>
          <p>Album Title:
            <input name={title} value={title} onChange={this.handleChangeSearch}/>
          </p>
        </label>
        <button>Search</button>
      </form>
    );
  }
}

export default Search;
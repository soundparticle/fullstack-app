import React, { Component } from 'react';
import qs from 'query-string';
import PropTypes from 'prop-types';
// import './Search.css';

class Search extends Component {

  state = {
    title: '',
    artist: ''
  };

  static propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
  };

  componentDidMount() {
    const { location } = this.props;
    const { title = '' } = qs.parse(location.title);
    const { artist = '' } = qs.parse(location.artist);
    this.setState({ title, artist });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { title, artist } = this.state;
    if(!title && artist) return;
    
    const { history } = this.props;
    history.push({
      pathname: '/search',
      title: qs.stringify({ title }),
      artist: qs.stringify({ artist })
    });
  };

  handleChangeSearch = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };
  
  render() {
    const { title, artist } = this.state;

    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <label>
          Search for Music: &nbsp;
          <p>Title:
            <input name="title" value={title} onChange={this.handleChangeSearch}/>
          </p>
          <p>Artist:
            <input name="artist" value={artist} onChange={this.handleChangeSearch}/>
          </p>
        </label>
        <button>Search</button>
      </form>
    );
  }
}

export default Search;
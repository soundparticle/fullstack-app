import React, { Component } from 'react';
import qs from 'query-string';
import PropTypes from 'prop-types';
// import './Search.css';

class Search extends Component {

  state = {
    search: ''
  };

  static propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
  };

  componentDidMount() {
    const { location } = this.props;
    const { search = '' } = qs.parse(location.search);
    this.setState({ search });
  }
  
  handleSubmit = event => {
    event.preventDefault();
    const { search } = this.state;
    if(!search) return;

    const { history } = this.props;
    history.push({
      pathname: '/search',
      search: qs.stringify({ search, page: 1 })
    });
  };

  handleChangeSearch = ({ target }) => {
    this.setState({ search: target.value });
  };

  
  render() {
    const { search } = this.state;

    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <label>
          Search for Music: &nbsp;
          <p>Title:
            <input name="title" value={search} onChange={this.handleSearch}/>
          </p>
          <p>Artist:
            <input name="artist" value={search} onChange={this.handleSearch}/>
          </p>
        </label>
        <button>Search</button>
      </form>
    );
  }
}

export default Search;
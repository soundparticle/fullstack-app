import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getArtists } from '../../services/DiscogsApi';
import { addFavorite, getFavorite, removeFavorite } from '../../services/favoritesApi';

export default class Artist extends Component {
  
  state = {
    artist: null,
    favorite: null
  };

  static propTypes = {    
    match: PropTypes.object.isRequired
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    getArtists(id)
      .then(artist => {
        this.setState({ artist });         
      })
      .catch(console.log);
    
    getFavorite(id)
      .then(favorite => {
        this.setState({ favorite });
      })
      .catch(console.log);
  }

  handleClick = () => {
    const { artist, favorite } = this.state;
    const isFavorite = !!favorite;

    if(isFavorite) {
      removeFavorite(artist.artist_id)
        .then(() => {
          this.setState({ favorite: null });
        })
        .catch(console.log);
    }
    else {
      addFavorite(this.state.artist)
        .then(favorite => {
          this.setState({ favorite });
        })
        .catch(console.log);
    }
  };

  render() {
    const { artist, favorite } = this.state;
    if(!artist) return null;

    const { title, year, cover_image } = artist;

    return (
      <div>
        <img src={cover_image}/>
        <h2>{title}</h2>
        <p><strong>Released:</strong> {year}</p>
        <button onClick={this.handleClick}>
          {favorite ? 'Remove from' : 'Add to' } Favorites
        </button>
      </div>
    );
  }
}
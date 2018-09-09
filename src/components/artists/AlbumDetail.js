import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getAlbums } from '../../services/DiscogsApi';
import { addFavorite, getFavorite, removeFavorite } from '../../services/favoritesApi';

export default class Album extends Component {
  
  state = {
    album: null,
    favorite: null
  };
  
  static propTypes = {    
    match: PropTypes.object.isRequired
  };
  
  componentDidMount() {
    const { id } = this.props.match.params;
    getAlbums(id)
      .then(album => {
        this.setState({ album });         
      })
      .catch(console.log);
    
    getFavorite(id)
      .then(favorite => {
        this.setState({ favorite });
      })
      .catch(console.log);
  }
  
  handleClick = () => {
    const { album, favorite } = this.state;
    const isFavorite = !!favorite;
    
    if(isFavorite) {
      removeFavorite(album.id)
        .then(() => {
          this.setState({ favorite: null });
        })
        .catch(console.log);
    }
    else {
      addFavorite(this.state.album)
        .then(favorite => {
          this.setState({ favorite });
        })
        .catch(console.log);
    }
  };
  
  render() {
    
    // console.log('**** data here ****', this.state);
    const { album, favorite } = this.state;
    if(!album) return null;

    const { title, year, images, id } = album;

    return (
      <div>
        <img src={images[0].resource_url}/>
        <h2>{title}</h2>
        <h2>{id}</h2>
        <p><strong>Released:</strong> {year}</p>
        <button onClick={this.handleClick}>
          {favorite ? 'Remove from' : 'Add to' } Favorites
        </button>
      </div>
    );
  }
}
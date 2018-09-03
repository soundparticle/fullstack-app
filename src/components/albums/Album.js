import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import discodog from '../../assets/discodog.png';

export default class Album extends Component {

  static propTypes = {
    album: PropTypes.object.isRequired
  };

  render() {
    const { album } = this.props;
    const { title, genre, year, cover_image, id } = album;
// check jsx img tags for proper source
    return (
      <li>
        <Link to={`/album/${id}`}>
          {cover_image !== 'N/A'
            ? <img src={cover_image.type.primary}/>
            : <img src={discodog}/>}
          <p><strong>{title}</strong>{genre}{year}</p>
        </Link>
      </li>
    ); 
  }
}
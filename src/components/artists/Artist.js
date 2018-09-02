import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import styles from './artist.css';
import discodog from '../../assets/discodog.png';

export default class Artist extends Component {

  static propTypes = {
    artist: PropTypes.object.isRequired
  };

  render() {
    const { artist } = this.props;
    const { name, profile, releases_url, images, id } = artist;
// check jsx img tags for proper source
    return (
      <li>
        <Link to={`/artist/${id}`}>
          {releases_url !== 'N/A'
            ? <img src={images.type.primary}/>
            : <img src={discodog}/>}
          <p><strong>{name}</strong>({profile})</p>
        </Link>
      </li>
    ); 
  }
}
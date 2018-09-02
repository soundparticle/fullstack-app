import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import styles from './artist.css';
import logo from '../../assets/logo.png';

export default class Artist extends Component {

  static propTypes = {
    artist: PropTypes.object.isRequired
  };

  render() {
    const { artist } = this.props;
    const { name, profile, releases_url, images, id } = artist;

    return (
      <li>
        <Link to={`/artists/${id}`}>
          {releases_url !== 'N/A'
            ? <img src={images.type.primary}/>
            : <img src={logo}/>}
          <p><strong>{name}</strong>({profile})</p>
        </Link>
      </li>
    ); 
  }
}
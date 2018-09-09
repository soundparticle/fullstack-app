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
    const { title, year, cover_image, id } = artist;
    return (
      <li>
        <Link to={`/album/${id}`}>
          {cover_image !== 'N/A'
            ? <img src={cover_image}/>
            : <img src={discodog}/>}
          <p><strong>{title}</strong>({year})</p>
        </Link>
      </li>
    ); 
  }
}
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Favorite extends Component {

  static propTypes = {
    album: PropTypes.object.isRequired
  };

  render() {
    const { album } = this.props;
    const { id, title, images, year } = album;

    return (
      <div>
        <li>
          <Link to={`/album/${id}`}>
            <img src={images}/>
            <p><strong>{title}</strong></p>
            <p><strong>{year}</strong></p>
          </Link>
        </li>
      </div>
    );
  }
}
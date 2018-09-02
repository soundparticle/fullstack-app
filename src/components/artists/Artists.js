import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Artist from './Artist';

export default class Artists extends Component {

  static propTypes = {
    artists: PropTypes.arrayOf(Object)
  };

  render() {
    const { artists } = this.props;

    return (
      <ul>
        {artists.map((artist, i) => (
          <Artist key={i} artist={artist}/>
        ))}
      </ul>
    );
  }
}
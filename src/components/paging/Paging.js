import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Paging extends Component {

  static propTypes = {
    page: PropTypes.number,
    per_page: PropTypes.number,
    totalResults: PropTypes.number,
    onPage: PropTypes.func.isRequired
  };

  handlePage(increment) {
    const { page, onPage } = this.props;
    onPage({ page: page + increment });
  }

  render() {
    const { totalResults, page, per_page } = this.props;
    
    if(!totalResults) return <div>No results found, try another search</div>;

    const totalPages = Math.ceil(totalResults / per_page);
    return (
      <div>
        <span>Page {page} of {totalPages}</span>
        &nbsp;
        <button onClick={() => this.handlePage(-1)}>&lt; Prev</button>
        <button onClick={() => this.handlePage(+1)}>Next &gt;</button>
      </div>
    );
  }
}
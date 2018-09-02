import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import qs from 'query-string';
import Artists from './Artists';
import Paging from '../paging/Paging';
import { search as searchArtists } from '../../services/api';

class Results extends Component {
  
  state = {
    artists: null,
    totalResults: 0,
    perPage: 10,
    loading: false,
    error: null
    
  };

  static propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.searchArtists();
  }

  componentDidUpdate({ location }) {
    const { page: oldPage } = qs.parse(location.search);
    const { search: oldSearch } = qs.parse(location.search);
    if(oldSearch !== this.SearchTerm || oldPage !== this.searchPage) this.searchArtists();
  }

  get searchTerm() {
    const { location } = this.props;
    const { search } = qs.parse(location.search);
    return search;
  }
  // do we need paging?
  searchArtists() {
    const { perPage } = this.state;
    const page = this.searchTerm;
    const search = this.searchTerm;
    if(!search) return;
    
    this.setState({ 
      loading: true,
      error: null
    });

    searchArtists({ search, }, { page, perPage })
      .then(
        ({ Search, totalResults }) => {
          this.setState({ artists: Search, totalResults, page });
        },
        err => {
          this.setState({ error: err.message });
        }
      )
      .then(() => {
        this.setState({ loading: false });
      });
  }

  render() {

    const { artists, loading, error } = this.state;
    const { perPage, totalResults } = this.state;
    const { searchTerm } = this;

    return (  
      <section>
        {(loading || error) &&
          <section className="notifications">
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}      
          </section>
        }

        {searchTerm &&
            <Fragment>
              <p>Searching for &quot;{searchTerm}&quot;</p>
              <Paging
                page={+this.searchPage}
                perPage={perPage}
                totalResults={parseInt(totalResults)}
                onPage={this.handlePage}
              />
            </Fragment>
        }
        <div>
          {artists
            ? <Artists artists={artists}/>
            : <p>Please enter your search,</p>
          }
        </div>
      </section>
    );
  }
}

export default Results;
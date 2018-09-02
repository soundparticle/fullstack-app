import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import qs from 'query-string';
import Artists from './Artists';
import Paging from '../paging/Paging';
import { search as searchArtist } from '../../services/OneMusicAPI';

class Results extends Component {
  
  state = {
    artist: null,
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
    this.searchArtist();
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
  searchArtist() {
    const { perPage } = this.state;
    const page = this.searchTerm;
    const search = this.searchTerm;
    if(!search) return;
    
    this.setState({ 
      loading: true,
      error: null
    });

    searchArtist({ search, }, { page, perPage })
      .then(
        ({ Search, totalResults }) => {
          this.setState({ artist: Search, totalResults, page });
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

    const { artist, loading, error } = this.state;
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
          {artist
            ? <Artists artist={artist}/>
            : <p>Please enter your search,</p>
          }
        </div>
      </section>
    );
  }
}

export default Results;
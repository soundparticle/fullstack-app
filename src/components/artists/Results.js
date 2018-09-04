import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import qs from 'query-string';
import Artists from './Artists';
import Paging from '../paging/Paging';
import { search as searchArtists } from '../../services/DiscogsApi';

class Results extends Component {
  
  state = {
    artists: null,
    items: 0,
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
    if(oldSearch !== this.searchTerm || oldPage !== this.searchPage) this.searchArtists();
  }

  handlePage = paging => {
    this.setState(paging, () => {
      const { perPage } = this.state;
      const search = this.searchTerm;
      const { page } = paging;
      const { history } = this.props;
      history.push({
        search: qs.stringify({ search, page, perPage })
      });
    });
  };

  get searchPage() {
    const { location } = this.props;
    const { page } = qs.parse(location.search);
    return page;
  }

  get searchTerm() {
    const { location } = this.props;
    const { search } = qs.parse(location.search);
    return search;
  }

  searchArtists() {
    const { perPage } = this.state;
    const page = parseInt(this.searchPage);
    const search = this.searchTerm;
    if(!search) return;

    this.setState({
      loading: true,
      error: null
    });
    
    searchArtists({ search }, { page, perPage })
      .then(
        ({ results, pagination }) => {
          this.setState({ artists: results, items: pagination.items, page });
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
    const { perPage, items } = this.state;
    const { searchTerm } = this;
    console.log('#########', items);

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
                items={parseInt(items)}
                onPage={this.handlePage}
              />
            </Fragment>
        }
        <div>
          {artists
            ? <Artists artists={artists}/>
            : <p>Please enter your search</p>
          }
        </div>
      </section>
    );
  }   
}

export default Results;
import React, { Component } from 'react';
import Search from './search/Search';
import { Link, Route } from 'react-router-dom';
import discodog from '../assets/discodog.png';
import styles from '../components/Header.css';

class Header extends Component {

  render() {

    return (
      <div className={styles.header}>  

        <section className="header-container">
          <div className="discodog"><img src={discodog}/>
            <h1>Artists</h1>
          </div> 
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/favorites">Favorites</Link>
              </li>
              <li>
                <Link to="/search">Search Artists</Link>
              </li>
            </ul>
          </nav>
        </section> 
        
        <section className="search-container">
          <Route component={Search}/>
        </section>
      </div>
    );
  }
}
export default Header;
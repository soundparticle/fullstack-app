import React,  { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router';
import Home from '../home/Home';
import Artists from '../artists/Artists';
import ArtistDetail from '../artists/ArtistDetail';
// import './App.css';

export default class App extends Component {

  render() {

    return (
      <Router>
        <div>
          <Link to= "/"><img src={require('../../assets/____________.jpg')} id="logo"/></Link><header className="header"></header>
          
          <nav>
            <ul>
              <li><Link to= "/">Home Page</Link></li>
              <li><Link to="/favorites">Favorites</Link></li>
              {/* <li><a>Images</a></li> */}
            </ul>
          </nav>
          <main>
            {<Switch>
              <Route exact path="/" component={Home}/>
              {/* <Route path="/about" component={About}/> */}
              <Route exact path="/artists" component={Artists}/>
              <Route path="/artists/:id" render={({ match }) => {
                return <AlbumDetail artistId={match.params.id} match={match}/>;
              }}/>
              <Redirect to="/"/>
            </Switch>}
          </main>
          <footer><p></p></footer>
        </div>
      </Router>
    );
  }

}

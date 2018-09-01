import React,  { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router';
import Header from '../Header';
import Home from '../home/Home';
// import Artists from '../artists/Artists';
import Results from '../artists/Results';
import ArtistDetail from '../artists/ArtistDetail';
import Favorites from '../favorites/Favorites';

// import './App.css';

class App extends Component {

  render() {

    return (
      <Router>
        <div>
          <header>
            <Header onSearch={this.handleSearch}/>
          </header>
          {/* <Link to= "/"><img src={require('../../assets/____________.jpg')} id="logo"/></Link><header className="header"></header> */}
          
          <nav>
            <ul>
              <li><Link to= "/">Home Page</Link></li>
              <li><Link to="/favorites">Favorites</Link></li>
              {/* <li><a>Images</a></li> */}
            </ul>
          </nav>
          <main>
            <Switch>
              <Route exact path="/" component={Home}/>
              {/* <Route path="/about" component={About}/> */}
              <Route exact path="/favorites" component={Favorites}/>
              <Route exact path="/search" component={Results}/>
              <Route exact path="/artists/:id" component={ArtistDetail}/>
              <Redirect to="/"/>
            </Switch>
          </main>
          <footer><p>&copy; 2018 Antreo and Mario Discodogs.</p></footer>
        </div>
      </Router>
    );
  }

}

export default App;
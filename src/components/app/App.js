import React,  { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from '../Header';
import Home from '../home/Home';
// import Artists from '../artists/Artists';
import Results from '../artists/Results';
import AlbumDetail from '../artists/AlbumDetail';
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
          
          
          {/* <nav>
            <ul>
              <li><Link to= "/">Home Page</Link></li>
              <li><Link to="/favorites">Favorites</Link></li>
            </ul> 
          </nav> */}

          <main>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/search" component={Results}/>
              <Route exact path="/album/:id" component={AlbumDetail}/> 
              <Route exact path="/favorites" component={Favorites}/>
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
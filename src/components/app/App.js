import React,  { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from '../Header';
import Home from '../home/Home';
import Results from '../albums/Results';
import AlbumDetail from '../albums/AlbumDetail';
import Favorites from '../favorites/Favorites';

class App extends Component {

  render() {

    return (
      <Router>
        <div>
          <header>
            <Header onSearch={this.handleSearch}/>
          </header>
         
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
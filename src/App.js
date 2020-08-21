import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
// import moduleName from '';
import './App.css';
import 'bulma/css/bulma.css';

// page
import { HomePage } from './pages/Home';
import { DetailsMovie } from './pages/DetailsMovie';
import { NotFound } from './pages/NotFound';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/detailsMovie/:id' component={DetailsMovie} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;

import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import moduleName from '';
import './App.css'
import 'bulma/css/bulma.css'

// page
import { HomePage } from './pages/Home'
import { DetailsMovie } from './pages/DetailsMovie'
import { NotFound } from './pages/NotFound'

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/detailsMovie/:id" component={DetailsMovie} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  </div>
)

export default App

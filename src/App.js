import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';

// components
import { Title } from './components/Title';
import { SearchForm } from './components/SearchForm';

class App extends Component {
  state = { results: [] }

  handleChange = (results) => {
    this.setState({ results });
  }

  renderResult() {
    const { results } = this.state;
    return results.map((movie) => {
      return (
        <div
          key={movie.imdbID}
          className="moviesContainar"
        >
          <p
            style={{ padding: 10, marginTop: 10 }}
          >
            {movie.Title}
          </p>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="App">
        <Title>
          Search Movies
        </Title>
        <div className="SeachForm-wrapper">
          <SearchForm onResult={this.handleChange} />
        </div>
        {this.state.results.length === 0
          ? <p>Sin Resultados</p>
          : this.renderResult()
        }
      </div>
    );
  }
}

export default App;

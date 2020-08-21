import React, { Component } from 'react';

// Components
import { SearchForm } from '../components/SearchForm';
import { Title } from '../components/Title';
import { MoviesList } from '../components/MoviesList';


export class HomePage extends Component {
    state = {
        usedSearch: false,
        results: []
    }

    handleChange = (results) => {
        this.setState({ results, usedSearch: true });
    }

    renderResults = () => {
        return this.state.results.length === 0
            ? <p>Sorry, <span role="img" aria-label="emojin">😭😭</span> Results not found!</p>
            : <MoviesList movies={this.state.results} />
    }
    render() {
        return (
            <div>
                <Title>
                    Search Movies
                </Title>
                <div className="SeachForm-wrapper">
                    <SearchForm onResult={this.handleChange} />
                </div>
                {this.state.usedSearch
                    ? this.renderResults()
                    : <small>Use the from to search a movie</small>
                }
            </div>
        );
    }
}
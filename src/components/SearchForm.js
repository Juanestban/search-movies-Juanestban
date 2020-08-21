import React, { Component } from 'react';


const API_KEY = 'd45ac7f8';

export class SearchForm extends Component {
    state = {
        inputMovie: ''
    }

    handleChange = (e) => {
        this.setState({ inputMovie: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { inputMovie } = this.state;

        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
            .then((res) => res.json())
            .then((data) => {
                const { Search = [], totalResults = '' } = data;
                console.log({ Search, totalResults});
                this.props.onResult(Search);
            });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="field has-addons">
                    <div className="control">
                        <input
                            className="input"
                            onChange={this.handleChange}
                            type="text"
                            placeholder="Movies to search..." />
                    </div>
                    <div className="control">
                        <button className="button is-info">
                            Search
                        </button>
                    </div>
                </div>
            </form>
        );
    }
}
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Movie } from './Movie';

export class MoviesList extends Component {
    static propTypes = {
        movies: PropTypes.array
    }

    renderResult() {
        const { movies } = this.props;
        return (
            <div className="moviesList">
                {
                    movies.map((movie) => {
                        return (
                            <div
                                key={movie.imdbID} 
                                className="MoviesList-item">
                                <Movie
                                    id={movie.imdbID}
                                    title={movie.Title}
                                    poster={movie.Poster}
                                    year={movie.Year}
                                />
                            </div>
                        );
                    })
                }
            </div>
        );
    }
    render() {
        return this.renderResult();
    }
}
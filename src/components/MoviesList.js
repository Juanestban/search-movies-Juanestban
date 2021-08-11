import React from 'react'
import PropTypes from 'prop-types'
import { Movie } from './Movie'

export const MoviesList = ({ movies }) => (
  <div className="moviesList">
    {movies.map((movie) => {
      return (
        <div key={movie.imdbID} className="MoviesList-item">
          <Movie
            id={movie.imdbID}
            title={movie.Title}
            poster={movie.Poster}
            year={movie.Year}
          />
        </div>
      )
    })}
  </div>
)

MoviesList.propTypes = {
  movies: PropTypes.array,
}

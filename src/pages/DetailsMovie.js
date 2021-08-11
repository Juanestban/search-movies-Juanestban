import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import { ButtonHome } from '../components/ButtonHome'

const API_KEY = '36b28ad7'

const initialMovieState = {
  Title: '',
  Poster: '',
  Actors: '',
  Metascore: '',
  Plot: '',
}

export const DetailsMovie = ({ match }) => {
  const [movie, setMovie] = useState(initialMovieState)

  const fetchMovie = async ({ id }) => {
    try {
      const { data } = await axios.get(
        `http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`
      )
      setMovie(data)
    } catch (e) {
      console.log('error details', e)
    }
  }

  useEffect(() => {
    const { id } = match.params
    fetchMovie({ id })
  })

  return (
    <div>
      <h1>{movie.Title}</h1>
      <img src={movie.Poster} alt={movie.Title} />
      <h3>{movie.Actors}</h3>
      <span>{movie.Metascore}</span>
      <p>{movie.Plot}</p>
      <br />
      <ButtonHome />
    </div>
  )
}

DetailsMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.object,
    isExact: PropTypes.bool,
    path: PropTypes.string,
    url: PropTypes.string,
  }),
}

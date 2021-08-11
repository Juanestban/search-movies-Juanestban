import React, { useState } from 'react'
import axios from 'axios'

const API_KEY = '36b28ad7'

export const SearchForm = ({ onResult }) => {
  const [inputMovie, setInputMovie] = useState('')

  const handleChange = ({ target: { value } }) => setInputMovie(value)

  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      const { data } = await axios.get(
        `http://omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`
      )
      const { Search = [], totalResults = '' } = data
      console.log({ Search, totalResults })
      onResult(Search)
    } catch (e) {
      console.log('error', e)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="field has-addons">
        <div className="control">
          <input
            className="input"
            onChange={handleChange}
            type="text"
            placeholder="Movies to search..."
          />
        </div>
        <div className="control">
          <button className="button is-info">Search</button>
        </div>
      </div>
    </form>
  )
}

import React, { useState } from 'react'

// Components
import { SearchForm } from '../components/SearchForm'
import { Title } from '../components/Title'
import { MoviesList } from '../components/MoviesList'

export const HomePage = () => {
  const [usedSearch, setUsedSearch] = useState(false)
  const [results, setResults] = useState([])

  const handleChange = (results) => {
    setUsedSearch(true)
    setResults(results)
  }

  const renderResults = () => {
    return results.length === 0 ? (
      <p>
        Sorry,{' '}
        <span role="img" aria-label="emojin">
          😭😭
        </span>{' '}
        Results not found!
      </p>
    ) : (
      <MoviesList movies={results} />
    )
  }

  return (
    <div>
      <Title>Search Movies</Title>
      <div className="SeachForm-wrapper">
        <SearchForm onResult={handleChange} />
      </div>
      {usedSearch ? (
        renderResults()
      ) : (
        <small>Use the from to search a movie</small>
      )}
    </div>
  )
}

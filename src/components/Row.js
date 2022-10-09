import React, { useEffect, useState } from 'react'
import './Row.css'
import axios from '../axios'

function Row({ title, fetchUrl, isTheRowLarge = false }) {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl)
      setMovies(request.data.results)
      return request
    }
    fetchData()
  }, [fetchUrl])

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map(
          movie =>
            ((isTheRowLarge && movie.poster_path) ||
              (!isTheRowLarge && movie.backdrop_path)) && (
              <img
                className={`row__poster ${isTheRowLarge && 'row__posterLarge'}`}
                key={movie.id}
                src={`https://image.tmdb.org/t/p/original/${
                  isTheRowLarge ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            )
        )}
      </div>
    </div>
  )
}

export default Row

import { React, useState } from 'react'
import { Tabs } from 'antd'
import MovieTile from '../MovieTile'
import SortControl from '../SortControl'
import styles from './index.module.scss'

export default function GenreSelect(props) {
  const { movies, movieChange } = props
  const genreTypes = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime']
  const filterdMovieByGenre = (filteredMovies) => {
    filteredMovies.sort((movie1, movie2) => movie1[sortValue] - movie2[sortValue])
    return (
      <div className={styles.movieBox}>
        {filteredMovies.map((movie) => (
          <MovieTile {...{ ...movie, movieChange, id: movie.key }} key={movie.key} />
        ))}
      </div>
    )
  }

  const [filteredMovies, setFilteredMovies] = useState(movies)
  const [sortValue, setSortValue] = useState('releaseYear')
  const mapGenres = (movies) =>
    genreTypes.map((genre, index) => {
      return { key: index, label: genre, children: filterdMovieByGenre(movies) }
    })
  const [genres, setGenres] = useState(mapGenres(filteredMovies))

  const onMovieSort = (value) => {
    sortMovie(value)
    setFilteredMovies(filteredMovies)
    setSortValue(value)
  }

  const sortMovie = (value) => {
    filteredMovies.sort((movie1, movie2) => {
      let value1 = movie1[value]
      let value2 = movie2[value]
      if (value === 'movieName') {
        return value1.localeCompare(value2)
      }
      return value1 - value2
    })
  }

  const onSelect = (key) => {
    let currentFilteredMovies = movies
    if (key !== 0) {
      currentFilteredMovies = currentFilteredMovies.filter((movie) => movie.type === key)
    }
    setFilteredMovies(currentFilteredMovies)
    setGenres(mapGenres(currentFilteredMovies))
  }
  return <Tabs defaultActiveKey='0' tabBarExtraContent={<SortControl movieSort={onMovieSort} />} items={genres} onChange={onSelect} className={styles.tabBox} />
}

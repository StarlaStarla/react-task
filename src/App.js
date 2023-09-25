import { React, useState } from 'react'
import './App.scss'
import SearchForm from './components/SearchForm'
import MovieDetails from './components/MovieDetails'
import GenreSelect from './components/GenreSelect'
import { ConfigProvider } from 'antd'

function App() {
  const movies = [
    {
      key: 0,
      type: 1,
      genre: 'Action & Adventure',
      movieName: 'PULP FICTION',
      releaseYear: 2004,
      imageUrl: '/movie1.png',
      rating: 8.9,
      duration: 154,
      description:
        'Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra'
    },
    {
      key: 1,
      type: 2,
      genre: 'Drama, Biography, Music',
      movieName: 'Bohemian Rhapsody',
      releaseYear: 2003,
      imageUrl: '/movie2.png',
      rating: 8.9,
      duration: 154,
      description:
        'Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra'
    },
    {
      key: 2,
      type: 3,
      genre: 'Oscar winning Movie',
      movieName: 'Bill: Vil2',
      releaseYear: 1994,
      imageUrl: '/movie3.png',
      rating: 8.9,
      duration: 154,
      description:
        'Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra'
    },
    {
      key: 3,
      type: 2,
      genre: 'Action & Adventure',
      movieName: 'Avengers: War of Infinity',
      releaseYear: 2004,
      imageUrl: '/movie4.png',
      rating: 8.9,
      duration: 154,
      description:
        'Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra'
    },
    {
      key: 4,
      type: 4,
      genre: 'Drama, Biography, Music',
      movieName: 'Inception',
      releaseYear: 2003,
      imageUrl: '/movie5.png',
      rating: 8.9,
      duration: 154,
      description:
        'Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra'
    },
    {
      key: 5,
      type: 1,
      genre: 'Oscar winning Movie',
      movieName: 'Reservoir dogs',
      releaseYear: 1994,
      imageUrl: '/movie6.png',
      rating: 8.9,
      duration: 154,
      description:
        'Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra'
    }
  ]
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [searchText, setSearchText] = useState('')

  const movieChange = (key) => {
    return () => setSelectedMovie(key)
  }

  const showselectedMovieInfo = () => {
    const movie = movies.find((movie) => movie.key === selectedMovie)
    if (movie !== -1) {
      return movie
    }
    return false
  }

  const changeText = (e) => {
    setSearchText(e.target.value)
  }
  const handleEnterEvent = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault()
    }
  }

  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            colorPrimary: '#F65261'
          },
          Tabs: {
            colorPrimary: '#F65261'
          },
          Select: {
            colorPrimary: '#F65261'
          }
        }
      }}
    >
      <div id='app'>
        {!showselectedMovieInfo() ? <SearchForm {...{ changeText, handleEnterEvent }} /> : <></>}
        {showselectedMovieInfo() ? <MovieDetails {...showselectedMovieInfo()} /> : <></>}
        <div className='genre-and-sort'>
          <GenreSelect {...{ movies, movieChange }} />
        </div>
      </div>
    </ConfigProvider>
  )
}

export default App

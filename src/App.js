import { React, createElement, useState } from 'react'
import './App.css'

function App() {
  return (
    <div id='app'>
      <Counter />
      <SearchForm />
      <GenreSelect />
    </div>
  )
}

function Counter() {
  const [number, setNumber] = useState(0)
  const changeNum = (increase) => {
    return () => (increase ? setNumber(number + 1) : setNumber(number - 1))
  }
  const input = createElement('input', { value: number, onChange: (e) => setNumber(e.target.value) })
  const increBtn = createElement('input', { type: 'button', value: 'increase', onClick: changeNum(true) })
  const decreBtn = createElement('input', { type: 'button', value: 'decrease', onClick: changeNum() })
  return createElement('div', {}, input, increBtn, decreBtn)
}

function SearchForm() {
  const [searchText, setSearchText] = useState('')
  const onSearch = () => {
    if (searchText) {
      console.log('Start search ' + searchText)
    }
  }
  const changeText = (e) => {
    setSearchText(e.target.value)
  }
  const handleEnterEvent = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault()
      console.log('Start search ' + searchText)
    }
  }
  return (
    <form action='#'>
      <input type='text' value={searchText} onChange={changeText} onKeyDown={handleEnterEvent}></input>
      <input type='button' value='Confirm' onClick={onSearch}></input>
    </form>
  )
}
function GenreSelect() {
  const [selectedGenre, setSelectedGenre] = useState(0)
  const genres = [
    { key: 1, type: 'Crime' },
    { key: 2, type: 'Horror' },
    { key: 3, type: 'Comedy' }
  ]
  const onSelect = (e) => {
    const selected = genres.filter((genre) => genre.type === e.target.value)
    selected[0] && setSelectedGenre(selected[0].key)
    console.log(selectedGenre)
  }
  return (
    <div>
      <label>Genre</label>
      <select onChange={onSelect}>
        {genres.map((genre) => (
          <option key={genre.key} className={selectedGenre === genre.key ? 'selected' : ''}>
            {genre.type}
          </option>
        ))}
      </select>
    </div>
  )
}

export default App

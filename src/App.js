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
  const input = createElement('input', { title: 'counter-value', value: number, onChange: (e) => setNumber(e.target.value) })
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
      <input type='text' title='search-form-value' value={searchText} onChange={changeText} onKeyDown={handleEnterEvent}></input>
      <input type='submit' value='Confirm' onClick={onSearch}></input>
    </form>
  )
}
function GenreSelect() {
  const [selectedGenre, setSelectedGenre] = useState(0)
  const genres = [
    { key: 0, type: 'Crime' },
    { key: 1, type: 'Horror' },
    { key: 2, type: 'Comedy' }
  ]
  const onSelect = (e) => {
    console.log('-------------', e.target.value)
    const selected = genres.filter((genre) => genre.type === e.target.value)
    selected[0] && setSelectedGenre(selected[0].key)
    console.log(selectedGenre)
  }
  return (
    <div>
      <label>Genre</label>
      <select data-testid='select' onChange={onSelect}>
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

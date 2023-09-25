import { React } from 'react'
import { Input } from 'antd'
import styles from './index.module.scss'

export default function SearchForm({ changeText, handleEnterEvent }) {
  const { Search } = Input
  return (
    <div className={styles.searchBox}>
      <div className={styles.title}>FIND YOUR MOVIE</div>
      <Search placeholder='What do you want to watch?' title='search-form-value' enterButton='Search' size='large' onChange={changeText} onKeyDown={handleEnterEvent} />
    </div>
    // {/* <Input title='search-form-value' placeholder='What do you want to watch?' value={searchText} onChange={changeText} onKeyDown={handleEnterEvent} /> */}
    // {/* <input type='text' title='search-form-value' value={searchText} onChange={changeText} onKeyDown={handleEnterEvent}></input>
    // <input type='submit' value='Confirm' onClick={onSearch}></input> */}
  )
}

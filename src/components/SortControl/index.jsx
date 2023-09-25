import { React } from 'react'
import { Select } from 'antd'
import styles from './index.module.scss'

export default function SortControl({ movieSort }) {
  const handleChange = (value) => {
    console.log(`selected ${value}`)
    movieSort(value)
  }

  return (
    <div>
      <label className={styles.label}>Sort by</label>
      <Select
        defaultValue='releaseYear'
        style={{ width: 150 }}
        onChange={handleChange}
        options={[
          { value: 'releaseYear', label: 'Release Year' },
          { value: 'movieName', label: 'Title' }
        ]}
        data-testid='sort-selection'
      />
    </div>
  )
}

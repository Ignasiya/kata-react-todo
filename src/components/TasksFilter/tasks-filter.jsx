import { useState } from 'react'
import './tasks-filter.css'

export default function TasksFilter() {
  const [filter, setFilter] = useState('All')

  const handleClick = filter => {
    setFilter(filter)
  }

  const labels = ['All', 'Active', 'Completed']

  return (
    <ul className='filters'>
      {labels.map(label => {
        return (
          <li key={label} className='filters__item'>
            <button
              type='button'
              className={`filters__btn ${filter === label ? 'selected' : ''}`}
              onClick={() => handleClick(label)}
            >
              {label}
            </button>
          </li>
        )
      })}
    </ul>
  )
}

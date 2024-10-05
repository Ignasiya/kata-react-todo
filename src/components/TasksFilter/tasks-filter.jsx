import './tasks-filter.css'

export default function TasksFilter({ onFilterChange, selectFilter }) {
  const labels = ['All', 'Active', 'Completed']

  return (
    <ul className='filters'>
      {labels.map(label => {
        return (
          <li key={label} className='filters__item'>
            <button
              type='button'
              className={`filters__btn ${selectFilter === label ? 'selected' : ''}`}
              onClick={() => onFilterChange(label)}
            >
              {label}
            </button>
          </li>
        )
      })}
    </ul>
  )
}

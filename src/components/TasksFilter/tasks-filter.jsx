import PropTypes from 'prop-types'

export default function TasksFilter({ onFilterChange, selectFilter = 'All' }) {
  const labels = ['All', 'Active', 'Completed']

  return (
    <ul className='filters'>
      {labels.map(label => {
        return (
          <li key={label}>
            <button
              type='button'
              className={selectFilter === label ? 'selected' : ''}
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

TasksFilter.propTypes = {
  onFilterChange: PropTypes.func,
  selectFilter: PropTypes.string
}

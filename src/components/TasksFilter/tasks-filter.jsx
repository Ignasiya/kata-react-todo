import PropTypes from 'prop-types'

export default function TasksFilter({ onFilterChange, selectedFilter = 'All' }) {
  const labels = ['All', 'Active', 'Completed']

  return (
    <ul className='filters'>
      {labels.map(label => {
        return (
          <li key={label}>
            <button
              type='button'
              className={selectedFilter === label ? 'selected' : ''}
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
  selectedFilter: PropTypes.string
}

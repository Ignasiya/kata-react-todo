interface TasksFilterProps {
  selectedFilter: string
  onFilterChange: (filter: string) => void
}

export default function TasksFilter({ onFilterChange, selectedFilter = 'All' }: TasksFilterProps) {
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

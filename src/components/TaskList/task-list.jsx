import PropTypes from 'prop-types'
import Task from '@/components/Task'
import './task-list.css'

export default function TaskList({ tasks, onCompeted, onDeleted, onUpdate }) {
  return (
    <ul className='todo-list'>
      {tasks.map(task => {
        const { id, ...taskData } = task
        return (
          <Task
            key={id}
            {...taskData}
            onCompeted={() => onCompeted(id)}
            onDeleted={() => onDeleted(id)}
            onUpdate={updatedText => onUpdate(id, updatedText)}
          />
        )
      })}
    </ul>
  )
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      created: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    })
  ).isRequired,
  onCompeted: PropTypes.func,
  onDeleted: PropTypes.func,
  onUpdate: PropTypes.func
}

TaskList.defaultProps = {
  tasks: [],
  onCompeted: () => {},
  onDeleted: () => {},
  onUpdate: () => {}
}

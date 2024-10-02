import PropTypes from 'prop-types'
import Task from '@/components/Task'
import './task-list.css'

export default function TaskList({ tasks, onCompeted, onDeleted }) {
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
          />
        )
      })}
    </ul>
  )
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      created: PropTypes.number,
      description: PropTypes.string,
      completed: PropTypes.bool,
      editing: PropTypes.bool
    })
  )
}

import PropTypes from 'prop-types'
import Task from '@/components/Task'
import './task-list.css'

const TaskList = ({ tasks }) => {
  return (
    <ul className='todo-list'>
      {tasks.map(task => {
        const { id, ...taskData } = task
        return <Task key={id} {...taskData} />
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

export default TaskList

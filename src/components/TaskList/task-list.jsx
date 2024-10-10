import PropTypes from 'prop-types'
import Task from '@/components/Task'

export default function TaskList({
  tasks = [],
  onComplete,
  onDelete,
  onUpdate,
  startTimer,
  stopTimer
}) {
  return (
    <ul className='todo-list'>
      {tasks.map(task => {
        const { id, ...taskData } = task
        return (
          <Task
            key={id}
            {...taskData}
            onComplete={() => onComplete(id)}
            onDelete={() => onDelete(id)}
            onUpdate={updatedText => onUpdate(id, updatedText)}
            startTimer={() => startTimer(id)}
            stopTimer={() => stopTimer(id)}
          />
        )
      })}
    </ul>
  )
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      created: PropTypes.number,
      time: PropTypes.number,
      description: PropTypes.string,
      completed: PropTypes.bool
    })
  ).isRequired,
  onComplete: PropTypes.func,
  onDelete: PropTypes.func,
  onUpdate: PropTypes.func,
  startTimer: PropTypes.func,
  stopTimer: PropTypes.func
}

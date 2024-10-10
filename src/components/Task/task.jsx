import PropTypes from 'prop-types'
import { formatDistanceToNow } from 'date-fns'
import { useState, useEffect } from 'react'
import Timer from '@/components/Timer'
import TaskEditor from '@/components/TaskEditor'

export default function Task({
  description,
  created,
  time,
  running,
  completed = false,
  onComplete,
  onDelete,
  onUpdate,
  startTimer,
  stopTimer
}) {
  const [createdAlert, setCreatedAlert] = useState(
    formatDistanceToNow(created, { addSuffix: true })
  )
  const [editing, setEditing] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCreatedAlert(formatDistanceToNow(created, { addSuffix: true }))
    }, 60000)
    return () => clearInterval(interval)
  }, [created])

  const handleEdit = () => {
    if (!completed) {
      setEditing(true)
    }
  }

  const handleSave = updatedDescription => {
    onUpdate(updatedDescription)
    setEditing(false)
  }

  const handleCancel = () => {
    setEditing(false)
  }

  return (
    <li className={completed ? 'completed' : editing ? 'editing' : ''}>
      <div className='view'>
        <input
          className='toggle'
          type='checkbox'
          checked={completed}
          onClick={onComplete}
          readOnly
        />
        <label>
          <span className='title'>{description}</span>

          <Timer time={time} running={running} onStart={startTimer} onStop={stopTimer} />

          <span className='description'>created {createdAlert}</span>
        </label>
        <button className='icon icon-edit' onClick={handleEdit}></button>
        <button className='icon icon-destroy' onClick={onDelete}></button>
      </div>
      {editing && (
        <TaskEditor description={description} onSave={handleSave} onCancel={handleCancel} />
      )}
    </li>
  )
}

Task.propTypes = {
  description: PropTypes.string.isRequired,
  created: PropTypes.number,
  time: PropTypes.number,
  running: PropTypes.bool,
  completed: PropTypes.bool,
  startTimer: PropTypes.func,
  stopTimer: PropTypes.func,
  onComplete: PropTypes.func,
  onDelete: PropTypes.func,
  onUpdate: PropTypes.func
}

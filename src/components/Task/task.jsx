import PropTypes from 'prop-types'
import { formatDistanceToNow } from 'date-fns'
import { useState } from 'react'
import './task.css'

export default function Task({ description, created, completed, onCompeted, onDeleted, onUpdate }) {
  const timeAgo = formatDistanceToNow(created, { addSuffix: true })

  const [editing, setEditing] = useState(false)
  const [newDescription, setNewDescription] = useState(description)

  const handleEdit = () => {
    if (!completed) {
      setEditing(true)
    }
  }

  const handleSubmit = event => {
    event.preventDefault()
    setEditing(false)
    if (newDescription) onUpdate(newDescription)
  }

  const handleInputChange = event => {
    setNewDescription(event.target.value)
  }

  return (
    <li className={completed ? 'completed' : editing ? 'editing' : ''}>
      <div className='view'>
        <input
          className='toggle'
          type='checkbox'
          checked={completed}
          onClick={onCompeted}
          readOnly
        />
        <label>
          <span className='description'>{description}</span>
          <span className='created'>created {timeAgo}</span>
        </label>
        <button className='icon icon-edit' onClick={handleEdit}></button>
        <button className='icon icon-destroy' onClick={onDeleted}></button>
      </div>
      {editing && (
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            className='edit'
            defaultValue={description}
            value={newDescription}
            onChange={handleInputChange}
          />
        </form>
      )}
    </li>
  )
}

Task.propTypes = {
  description: PropTypes.string,
  created: PropTypes.number,
  completed: PropTypes.bool,
  editing: PropTypes.bool
}

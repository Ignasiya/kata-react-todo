import PropTypes from 'prop-types'
import { formatDistanceToNow } from 'date-fns'
import { useState } from 'react'

export default function Task({
  description,
  created,
  completed = false,
  onCompeted,
  onDeleted,
  onUpdate
}) {
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
          <span className='title'>{description}</span>
          <span className='description'>
            <button className='icon icon-play'></button>
            <button className='icon icon-pause'></button>
            12:25
          </span>
          <span className='description'>created {timeAgo}</span>
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
  description: PropTypes.string.isRequired,
  created: PropTypes.number.isRequired,
  completed: PropTypes.bool,
  onCompeted: PropTypes.func,
  onDeleted: PropTypes.func,
  onUpdate: PropTypes.func
}

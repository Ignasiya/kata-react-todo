import { useState } from 'react'
import PropTypes from 'prop-types'

export default function TaskEditor({ description, onSave, onCancel }) {
  const [newDescription, setNewDescription] = useState(description)

  const handleInputChange = event => {
    setNewDescription(event.target.value)
  }

  const handleKeyDown = event => {
    if (event.key === 'Escape') {
      setNewDescription(description)
      onCancel()
    } else if (event.key === 'Enter') {
      handleSave()
    }
  }

  const handleBlur = () => handleSave()

  const handleSave = () => (newDescription.trim() ? onSave(newDescription) : onCancel())

  return (
    <input
      type='text'
      className='edit'
      value={newDescription}
      onChange={handleInputChange}
      onKeyDown={handleKeyDown}
      onBlur={handleBlur}
    />
  )
}

TaskEditor.propTypes = {
  description: PropTypes.string,
  onSave: PropTypes.func,
  onCancel: PropTypes.func
}

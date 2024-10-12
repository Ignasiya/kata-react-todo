import { useState } from 'react'

interface TaskEditorProps {
  description: string
  onSave: (description: string) => void
  onCancel: () => void
}

export default function TaskEditor({ description, onSave, onCancel }: TaskEditorProps) {
  const [newDescription, setNewDescription] = useState(description)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewDescription(event.target.value)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
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

import { useState } from 'react'
import './new-task-form.css'

export default function NewTaskForm({ onSubmit }) {
  const [newTask, setNewTask] = useState('')

  const handleChange = event => {
    setNewTask(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    onSubmit(newTask)
    setNewTask('')
  }

  return (
    <header className='header'>
      <h1>todos</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          className='new-todo'
          placeholder='What needs to be done?'
          autoFocus
          value={newTask}
          onChange={handleChange}
        />
      </form>
    </header>
  )
}

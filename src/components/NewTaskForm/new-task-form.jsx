import { useState } from 'react'
import PropTypes from 'prop-types'

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
      <form className='new-todo-form' onSubmit={handleSubmit}>
        <input
          type='text'
          className='new-todo'
          placeholder='Task'
          value={newTask}
          onChange={handleChange}
        />
        <input type='text' className='new-todo-form__timer' placeholder='Min' />
        <input type='text' className='new-todo-form__timer' placeholder='Sec' />
      </form>
    </header>
  )
}

NewTaskForm.propTypes = {
  onSubmit: PropTypes.func
}

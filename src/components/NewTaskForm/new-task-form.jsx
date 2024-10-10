import { useState } from 'react'
import PropTypes from 'prop-types'

export default function NewTaskForm({ onSubmit }) {
  const [newTask, setNewTask] = useState('')
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  const handleChange = event => {
    setNewTask(event.target.value)
  }

  const handleMinutesChange = event => {
    setMinutes(event.target.value)
  }

  const handleSecondsChange = event => {
    setSeconds(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    const totalSeconds = parseInt(minutes) * 60 + parseInt(seconds)

    onSubmit(newTask, +totalSeconds)

    setNewTask('')
    setMinutes(0)
    setSeconds(0)
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
          required
        />
        <input
          type='number'
          className='new-todo-form__timer'
          onChange={handleMinutesChange}
          value={minutes === 0 ? '' : minutes}
          placeholder='Min'
          min={0}
          max={60}
        />
        <input
          type='number'
          className='new-todo-form__timer'
          onChange={handleSecondsChange}
          value={seconds === 0 ? '' : seconds}
          placeholder='Sec'
          min={0}
          max={60}
        />
        <button type='submit' />
      </form>
    </header>
  )
}

NewTaskForm.propTypes = {
  onSubmit: PropTypes.func
}

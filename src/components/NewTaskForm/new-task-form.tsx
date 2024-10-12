import { useState } from 'react'

interface NewTaskFormProps {
  onSubmit: (description: string, time: number) => void
}

export default function NewTaskForm({ onSubmit }: NewTaskFormProps) {
  const [newTask, setNewTask] = useState<string>('')
  const [minutes, setMinutes] = useState<number>(0)
  const [seconds, setSeconds] = useState<number>(0)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value)
  }

  const handleMinutesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMinutes(+event.target.value)
  }

  const handleSecondsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSeconds(+event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const totalSeconds = minutes * 60 + seconds

    onSubmit(newTask, totalSeconds)

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

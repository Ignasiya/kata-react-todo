import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

export const useTasks = () => {
  const [tasks, setTasks] = useState([])
  const [filter, setFilter] = useState('All')

  const addTask = (description, time) => {
    setTasks(prevTasks => [
      ...prevTasks,
      {
        id: uuidv4(),
        description,
        created: Date.now(),
        time,
        running: false,
        completed: false
      }
    ])
  }

  const deleteTask = id => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id))
  }

  const toggleCompleteTask = id => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
              running: false,
              time: !task.completed ? 0 : task.time
            }
          : task
      )
    )
  }

  const updateTask = (id, updatedDescription) => {
    setTasks(prevTasks =>
      prevTasks.map(task => (task.id === id ? { ...task, description: updatedDescription } : task))
    )
  }

  const deleteAllCompletedTasks = () => {
    setTasks(prevTasks => prevTasks.filter(task => !task.completed))
  }

  const startTimer = id => {
    setTasks(prevTasks =>
      prevTasks.map(task => {
        if (task.id === id && !task.completed) {
          return { ...task, running: true }
        }
        return task
      })
    )
  }

  const stopTimer = id => {
    setTasks(prevTasks =>
      prevTasks.map(task => (task.id === id ? { ...task, running: false } : task))
    )
  }

  useEffect(() => {
    const hasRunningTasks = tasks.some(task => task.running)
    if (hasRunningTasks) {
      const interval = setInterval(() => {
        setTasks(prevTasks =>
          prevTasks.map(task => {
            if (task.running && task.time > 0) {
              return { ...task, time: task.time - 1 }
            }
            return task
          })
        )
      }, 1000)

      return () => clearInterval(interval)
    }
  }, [tasks])

  const filteredTasks = tasks.filter(task => {
    switch (filter) {
      case 'Active':
        return !task.completed
      case 'Completed':
        return task.completed
      default:
        return true
    }
  })

  const completedTasksCount = tasks.filter(task => task.completed).length

  return {
    tasks: filteredTasks,
    addTask,
    deleteTask,
    toggleCompleteTask,
    updateTask,
    deleteAllCompletedTasks,
    startTimer,
    stopTimer,
    filter,
    setFilter,
    completedTasksCount
  }
}

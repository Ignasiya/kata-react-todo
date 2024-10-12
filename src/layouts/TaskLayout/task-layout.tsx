import NewTaskForm from '@/components/NewTaskForm'
import TaskList from '@/components/TaskList'
import Footer from '@/components/Footer'
import TasksFilter from '@/components/TasksFilter'
import { useState, useEffect, useReducer } from 'react'
import tasksReducer from './useReducer'

export default function TaskLayout() {
  const [tasks, dispatch] = useReducer(tasksReducer, [])
  const [filter, setFilter] = useState<string>('All')

  const addTask = (description: string, time: number) => {
    dispatch({ type: 'added', description, time })
  }

  const deleteTask = (id: string) => {
    dispatch({ type: 'deleted', id })
  }

  const toggleCompleteTask = (id: string) => {
    dispatch({ type: 'completed', id })
  }

  const updateTask = (id: string, description: string) => {
    dispatch({ type: 'updated', id, description })
  }

  const deleteAllCompletedTasks = () => {
    dispatch({ type: 'allCompletedDeleted' })
  }

  const startTimer = (id: string) => {
    dispatch({ type: 'timerStarted', id })
  }

  const stopTimer = (id: string) => {
    dispatch({ type: 'timerStopped', id })
  }

  useEffect(() => {
    const hasRunningTasks = tasks.some(task => task.running)
    if (hasRunningTasks) {
      const interval = setInterval(() => {
        dispatch({ type: 'timerTicked' })
      }, 1000)

      return () => clearInterval(interval)
    }
  }, [tasks, dispatch])

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

  return (
    <section className='todoapp'>
      <NewTaskForm onSubmit={addTask} />
      <section className='main'>
        <TaskList
          tasks={filteredTasks}
          onComplete={toggleCompleteTask}
          onDelete={deleteTask}
          onUpdate={updateTask}
          startTimer={startTimer}
          stopTimer={stopTimer}
        />
        <Footer count={completedTasksCount} onAllCompleteDeleted={deleteAllCompletedTasks}>
          <TasksFilter onFilterChange={setFilter} selectedFilter={filter} />
        </Footer>
      </section>
    </section>
  )
}

import { useState } from 'react'
import NewTaskForm from '@/components/NewTaskForm'
import TaskList from '@/components/TaskList'
import Footer from '@/components/Footer'
import TasksFilter from '@/components/TasksFilter'
import { v4 as uuidv4 } from 'uuid'

export default function TaskLayout() {
  const [tasks, setTasks] = useState([])
  const [filter, setFilter] = useState('All')

  const handleFilterChange = filter => {
    setFilter(filter)
  }

  const handleCompleted = id => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, completed: !task.completed } : task)))
  }

  const handleDeleted = id => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const handleSubmit = text => {
    setTasks([
      ...tasks,
      {
        id: uuidv4(),
        description: text,
        created: Date.now(),
        completed: false
      }
    ])
    setFilter('All')
  }

  const handelUpdated = (id, updatedDescription) => {
    setTasks(
      tasks.map(task => (task.id === id ? { ...task, description: updatedDescription } : task))
    )
  }

  const handelAllCompleateDeleted = () => {
    setTasks(tasks.filter(task => !task.completed))
  }

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

  const countCompleated = tasks.filter(task => task.completed).length

  return (
    <section className='todoapp'>
      <NewTaskForm onSubmit={handleSubmit} />
      <section className='main'>
        <TaskList
          tasks={filteredTasks}
          onCompeted={handleCompleted}
          onDeleted={handleDeleted}
          onUpdate={handelUpdated}
        />
        <Footer count={countCompleated} onAllCompleateDeleted={handelAllCompleateDeleted}>
          <TasksFilter onFilterChange={handleFilterChange} selectFilter={filter} />
        </Footer>
      </section>
    </section>
  )
}

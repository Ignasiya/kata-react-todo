import { useState } from 'react'
import NewTaskForm from '@/components/NewTaskForm'
import TaskList from '@/components/TaskList'
import Footer from '@/components/Footer'
import TasksFilter from '@/components/TasksFilter'
import './task-layout.css'

export default function TaskLayout() {
  const tasksData = [
    {
      id: 1,
      description: 'Completed task',
      created: Date.now() - 20 * 60 * 1000,
      completed: true
    },
    {
      id: 2,
      description: 'Editing task',
      created: Date.now() - 60 * 60 * 1000,
      completed: false
    },
    {
      id: 3,
      description: 'Active task',
      created: Date.now() - 5 * 60 * 1000,
      completed: false
    }
  ]

  const [tasks, setTasks] = useState(tasksData)

  const handleCompleted = id => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, completed: !task.completed } : task)))
  }

  const handleDeleted = id => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  return (
    <section className='todoapp'>
      <NewTaskForm />
      <section className='main'>
        <TaskList tasks={tasks} onCompeted={handleCompleted} onDeleted={handleDeleted} />
        <Footer count={tasks?.length || 0}>
          <TasksFilter />
        </Footer>
      </section>
    </section>
  )
}

import NewTaskForm from '@/components/NewTaskForm'
import TaskList from '@/components/TaskList'
import Footer from '@/components/Footer'
import TasksFilter from '@/components/TasksFilter'
import './task-layout.css'

export default function TaskLayout() {
  const tasks = [
    {
      id: 1,
      description: 'Completed task',
      created: Date.now() - 20 * 60 * 1000,
      completed: true,
      editing: false
    },
    {
      id: 2,
      description: 'Editing task',
      created: Date.now() - 60 * 60 * 1000,
      completed: false,
      editing: true
    },
    {
      id: 3,
      description: 'Active task',
      created: Date.now() - 5 * 60 * 1000,
      completed: false,
      editing: false
    }
  ]

  return (
    <section className='todoapp'>
      <NewTaskForm />
      <section className='main'>
        <TaskList tasks={tasks} />
        <Footer count={tasks?.length || 0}>
          <TasksFilter />
        </Footer>
      </section>
    </section>
  )
}

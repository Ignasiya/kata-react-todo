import NewTaskForm from '@/components/NewTaskForm'
import TaskList from '@/components/TaskList'
import Footer from '@/components/Footer'
import TasksFilter from '@/components/TasksFilter'
import { useTasks } from './useTasks'

export default function TaskLayout() {
  const {
    tasks,
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
  } = useTasks()

  return (
    <section className='todoapp'>
      <NewTaskForm onSubmit={addTask} />
      <section className='main'>
        <TaskList
          tasks={tasks}
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

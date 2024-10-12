import Task from '@/components/Task'

interface TaskListProps {
  tasks: Array<{
    id: string
    description: string
    created: number
    time: number
    running: boolean
    completed: boolean
  }>
  onComplete: (id: string) => void
  onDelete: (id: string) => void
  onUpdate: (id: string, description: string) => void
  startTimer: (id: string) => void
  stopTimer: (id: string) => void
}

export default function TaskList({
  tasks = [],
  onComplete,
  onDelete,
  onUpdate,
  startTimer,
  stopTimer
}: TaskListProps) {
  return (
    <ul className='todo-list'>
      {tasks.map(task => {
        const { id, ...taskData } = task
        return (
          <Task
            key={id}
            {...taskData}
            onComplete={() => onComplete(id)}
            onDelete={() => onDelete(id)}
            onUpdate={(updatedText: string) => onUpdate(id, updatedText)}
            startTimer={() => startTimer(id)}
            stopTimer={() => stopTimer(id)}
          />
        )
      })}
    </ul>
  )
}

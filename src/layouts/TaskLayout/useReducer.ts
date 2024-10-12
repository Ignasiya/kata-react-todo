import { v4 as uuidv4 } from 'uuid'

interface Task {
  id: string
  description: string
  created: number
  time: number
  running: boolean
  completed: boolean
}

type Action =
  | { type: 'added'; description: string; time: number }
  | { type: 'deleted'; id: string }
  | { type: 'completed'; id: string }
  | { type: 'updated'; id: string; description: string }
  | { type: 'allCompletedDeleted' }
  | { type: 'timerStarted'; id: string }
  | { type: 'timerStopped'; id: string }
  | { type: 'timerTicked' }

export default function tasksReducer(tasks: Task[], action: Action): Task[] {
  switch (action.type) {
    case 'added': {
      return [
        ...tasks,
        {
          id: uuidv4(),
          description: action.description,
          created: Date.now(),
          time: action.time,
          running: false,
          completed: false
        }
      ]
    }
    case 'deleted': {
      return tasks.filter(task => task.id !== action.id)
    }
    case 'completed': {
      return tasks.map(task =>
        task.id === action.id
          ? {
              ...task,
              completed: !task.completed,
              running: false,
              time: !task.completed ? 0 : task.time
            }
          : task
      )
    }
    case 'updated': {
      return tasks.map(task =>
        task.id === action.id ? { ...task, description: action.description } : task
      )
    }
    case 'allCompletedDeleted': {
      return tasks.filter(task => !task.completed)
    }
    case 'timerStarted': {
      return tasks.map(task => {
        if (task.id === action.id && !task.completed) {
          return { ...task, running: true }
        }
        return task
      })
    }
    case 'timerStopped': {
      return tasks.map(task => (task.id === action.id ? { ...task, running: false } : task))
    }
    case 'timerTicked': {
      return tasks.map(task => {
        if (task.running && task.time > 0) {
          return { ...task, time: task.time - 1 }
        }
        return task
      })
    }
    default: {
      return tasks
    }
  }
}

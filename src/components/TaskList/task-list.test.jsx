import { render, screen } from '@testing-library/react'
import TaskList from '@/components/TaskList'

vi.mock('../Task', () => {
  return {
    default: props => <li data-testid='task'>{props.description}</li>
  }
})

describe('TaskList component', () => {
  const tasks = [
    { id: 1, description: 'Task 1', created: Date.now(), completed: false, editing: false },
    { id: 2, description: 'Task 2', created: Date.now(), completed: true, editing: false }
  ]

  it('отображение без ошибок', () => {
    render(<TaskList tasks={[]} />)
    expect(screen.getByRole('list')).toBeInTheDocument()
  })

  it('отображает пустой список, если задачи не заданы', () => {
    render(<TaskList tasks={[]} />)
    expect(screen.getByRole('list')).toBeEmptyDOMElement()
  })

  it('отображает правильное количество задач', () => {
    render(<TaskList tasks={tasks} />)
    const taskElements = screen.getAllByTestId('task')
    expect(taskElements).toHaveLength(tasks.length)
  })

  it('корректно отображает описания задач', () => {
    render(<TaskList tasks={tasks} />)
    expect(screen.getByText('Task 1')).toBeInTheDocument()
    expect(screen.getByText('Task 2')).toBeInTheDocument()
  })
})

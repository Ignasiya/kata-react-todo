import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import Task from '@/components/Task'

vi.mock('date-fns', () => {
  return {
    ...vi.importActual('date-fns'),
    formatDistanceToNow: vi.fn(() => '5 minutes ago')
  }
})

describe('Task component', () => {
  const task = {
    description: 'Test task',
    created: Date.now(),
    completed: false,
    editing: false
  }

  it('отображает описание задачи и время создания', () => {
    render(<Task {...task} />)
    expect(screen.getByText('Test task')).toBeInTheDocument()
    expect(screen.getByText(/5 minutes ago/)).toBeInTheDocument()
  })

  test('отображает выполненную задачу с классом completed', () => {
    render(<Task {...task} completed={true} />)

    const listItem = screen.getByRole('listitem')
    expect(listItem).toHaveClass('completed')
    expect(screen.getByRole('checkbox')).toBeChecked()
  })

  test('визуализирует задачу редактирования с помощью поля ввода', () => {
    render(<Task {...task} editing={true} />)

    const listItem = screen.getByRole('listitem')
    expect(listItem).toHaveClass('editing')

    const input = screen.getByRole('textbox')
    expect(input).toBeInTheDocument()
    expect(input).toHaveValue('Test task')
  })

  test('рендеринг без редактирования и завершенных классов', () => {
    render(<Task {...task} />)

    const listItem = screen.getByRole('listitem')
    expect(listItem).not.toHaveClass('completed')
    expect(listItem).not.toHaveClass('editing')
  })
})

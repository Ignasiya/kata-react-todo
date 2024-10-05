import { render, screen } from '@testing-library/react'
import TasksFilter from '@/components/TasksFilter'

describe('TasksFilter component', () => {
  it('отображение кнопок фильтров', () => {
    render(<TasksFilter />)

    const allButton = screen.getByRole('button', { name: /All/i })
    const activeButton = screen.getByRole('button', { name: /Active/i })
    const completedButton = screen.getByRole('button', { name: /Completed/i })

    expect(allButton).toBeInTheDocument()
    expect(activeButton).toBeInTheDocument()
    expect(completedButton).toBeInTheDocument()
  })

  it('отображает кнопку "All", выбранную по умолчанию', () => {
    render(<TasksFilter />)

    const allButton = screen.getByRole('button', { name: /All/i })
    expect(allButton).toHaveClass('selected')
  })
})

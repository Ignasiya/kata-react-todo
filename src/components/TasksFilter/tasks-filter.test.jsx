import { render, screen, fireEvent } from '@testing-library/react'
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

  it('устанавливает выбранный фильтр при нажатии кнопки', () => {
    render(<TasksFilter />)

    const activeButton = screen.getByRole('button', { name: /Active/i })
    fireEvent.click(activeButton)

    expect(activeButton).toHaveClass('selected')

    const allButton = screen.getByRole('button', { name: /All/i })
    expect(allButton).not.toHaveClass('selected')

    const completedButton = screen.getByRole('button', { name: /Completed/i })
    expect(completedButton).not.toHaveClass('selected')
  })

  it('отображает кнопку "All", выбранную по умолчанию', () => {
    render(<TasksFilter />)

    const allButton = screen.getByRole('button', { name: /All/i })
    expect(allButton).toHaveClass('selected')
  })
})

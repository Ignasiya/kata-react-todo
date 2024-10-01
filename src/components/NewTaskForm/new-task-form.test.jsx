import { render, screen } from '@testing-library/react'
import NewTaskForm from '@/components/NewTaskForm'

describe('NewTaskForm component', () => {
  it('отображение без сбоев', () => {
    render(<NewTaskForm />)
    expect(screen.getByRole('heading', { name: /todos/i })).toBeInTheDocument()
  })

  it('отображает поле ввода с правильным заполнителем', () => {
    render(<NewTaskForm />)
    const input = screen.getByPlaceholderText('What needs to be done?')
    expect(input).toBeInTheDocument()
    expect(input.getAttribute('placeholder')).toBe('What needs to be done?')
  })
})

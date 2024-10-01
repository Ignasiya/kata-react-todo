import { render, screen } from '@testing-library/react'
import Footer from '@/components/Footer'

describe('Footer component', () => {
  it('отображает правильное количество оставшихся элементов', () => {
    render(<Footer count={5} />)
    expect(screen.getByText('5 items left')).toBeInTheDocument()
  })

  it('корректно отображает дочерние элементы', () => {
    render(
      <Footer count={0}>
        <span>Test children</span>
      </Footer>
    )
    expect(screen.getByText('Test children')).toBeInTheDocument()
  })

  it('отображает кнопку "Clear completed"', () => {
    render(<Footer count={0} />)
    expect(screen.getByRole('button', { name: /clear completed/i })).toBeInTheDocument()
  })
})

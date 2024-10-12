interface FooterProps {
  count: number
  children: React.ReactNode
  onAllCompleteDeleted: () => void
}

export default function Footer({ children, count, onAllCompleteDeleted }: FooterProps) {
  return (
    <footer className='footer'>
      <span className='todo-count'>{count} items left</span>

      {children}

      <button className='clear-completed' onClick={onAllCompleteDeleted}>
        Clear completed
      </button>
    </footer>
  )
}

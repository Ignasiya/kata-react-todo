import './footer.css'

const Footer = ({ children, items }) => {
  return (
    <footer className='footer'>
      <span className='todo-count'>{items} items left</span>

      {children}

      <button className='clear-completed'>Clear completed</button>
    </footer>
  )
}

export default Footer

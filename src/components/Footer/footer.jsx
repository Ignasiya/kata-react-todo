import PropTypes from 'prop-types'
import './footer.css'

const Footer = ({ children, count }) => {
  return (
    <footer className='footer'>
      <span className='todo-count'>{count} items left</span>

      {children}

      <button className='clear-completed'>Clear completed</button>
    </footer>
  )
}

Footer.propTypes = {
  children: PropTypes.node.isRequired,
  count: PropTypes.number.isRequired
}

export default Footer

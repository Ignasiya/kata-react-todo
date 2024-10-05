import PropTypes from 'prop-types'
import './footer.css'

export default function Footer({ children, count, onAllCompleateDeleted }) {
  return (
    <footer className='footer'>
      <span className='todo-count'>{count} items left</span>

      {children}

      <button className='clear-completed' onClick={onAllCompleateDeleted}>
        Clear completed
      </button>
    </footer>
  )
}

Footer.propTypes = {
  children: PropTypes.node.isRequired,
  count: PropTypes.number.isRequired
}

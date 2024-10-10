import PropTypes from 'prop-types'

export default function Footer({ children, count, onAllCompleteDeleted }) {
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

Footer.propTypes = {
  children: PropTypes.node,
  count: PropTypes.number,
  onAllCompleteDeleted: PropTypes.func
}

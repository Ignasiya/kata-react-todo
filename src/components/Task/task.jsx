import PropTypes from 'prop-types'
import { formatDistanceToNow } from 'date-fns'
import './task.css'

export default function Task({ description, created, completed, editing }) {
  const timeAgo = formatDistanceToNow(created, { addSuffix: true })

  return (
    <li className={completed ? 'completed' : editing ? 'editing' : ''}>
      <div className='view'>
        <input className='toggle' type='checkbox' checked={completed} readOnly />
        <label>
          <span className='description'>{description}</span>
          <span className='created'>created {timeAgo}</span>
        </label>
        <button className='icon icon-edit'></button>
        <button className='icon icon-destroy'></button>
      </div>
      {editing && <input type='text' className='edit' defaultValue={description} />}
    </li>
  )
}

Task.propTypes = {
  description: PropTypes.string,
  created: PropTypes.number,
  completed: PropTypes.bool,
  editing: PropTypes.bool
}

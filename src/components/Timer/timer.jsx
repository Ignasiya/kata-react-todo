import PropTypes from 'prop-types'

export default function Timer({ time, running, onStart, onStop }) {
  const formatTime = totalSeconds => {
    const mins = Math.floor(totalSeconds / 60)
    const secs = totalSeconds % 60
    return `${mins < 10 ? `0${mins}` : mins}:${secs < 10 ? `0${secs}` : secs}`
  }

  return (
    <span className='description'>
      {!running ? (
        time > 0 && <button className='icon icon-play' onClick={onStart}></button>
      ) : (
        <button className='icon icon-pause' onClick={onStop}></button>
      )}
      {formatTime(time)}
    </span>
  )
}

Timer.propTypes = {
  time: PropTypes.number,
  running: PropTypes.bool,
  onStart: PropTypes.func,
  onStop: PropTypes.func
}

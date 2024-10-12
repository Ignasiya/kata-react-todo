interface TimerProps {
  time: number
  running: boolean
  onStart: () => void
  onStop: () => void
}

export default function Timer({ time, running, onStart, onStop }: TimerProps) {
  const formatTime = (totalSeconds: number) => {
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

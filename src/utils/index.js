const debounce = (fn, debounceTime) => {
  let timeout

  return function (...args) {
    const fnCall = () => {
      fn.apply(this, args)
    }

    clearTimeout(timeout)

    timeout = setTimeout(fnCall, debounceTime)
  }
}

export { debounce }

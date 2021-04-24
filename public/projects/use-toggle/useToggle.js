import { useState, useMemo } from 'https://cdn.skypack.dev/react@17.0.1'

export const useToggle = (defaultValue = false) => {
  const [state, setState] = useState(defaultValue)

  const handlers = useMemo(
    () => ({
      on: () => {
        setState(true)
      },
      off: () => {
        setState(false)
      },
      toggle: () => {
        setState((s) => !s)
      },
    }),
    []
  )

  return [state, handlers]
}

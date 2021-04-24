import Didact from './didact.js'

/** @jsx Didact.createElement */
function Counter() {
  const [state, setState] = Didact.useState(1)

  return (
    <div>
      <h1>Count: {state}</h1>
      <button onClick={() => setState((c) => c + 1)}>Increase</button>
      <button onClick={() => setState((c) => c - 1)}>Decrease</button>
    </div>
  )
}

const element = <Counter />
const container = document.getElementById('root')
Didact.render(element, container)

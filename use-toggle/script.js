import { createElement } from 'https://cdn.skypack.dev/react@17.0.1'
import { render } from 'https://cdn.skypack.dev/react-dom@17.0.1'

import { useToggle } from './useToggle.js'

const App = () => {
  const [state, handlers] = useToggle(true)

  return createElement(
    'div',
    {},
    `enabled: ${state.toString()}`,

    createElement('br', {}, null ),
    createElement('button', { onClick: handlers.on }, 'On'),
    createElement('button', { onClick: handlers.off }, 'Off'),
    createElement('button', { onClick: handlers.toggle }, 'Toggle')
  )
}

render(createElement(App, {}, null), document.getElementById('root'))

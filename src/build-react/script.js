import React from 'https://cdn.skypack.dev/react@17.0.1'
import ReactDOM from 'https://cdn.skypack.dev/react-dom@17.0.1'

const element = React.createElement('h1', { title: 'foo' }, 'Hello World!')
const container = document.getElementById('root')

ReactDOM.render(element, container)

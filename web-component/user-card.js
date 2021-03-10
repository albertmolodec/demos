// import { createElement } from 'https://cdn.skypack.dev/pin/react@v17.0.1-yH0aYV1FOvoIPeKBbHxg/mode=imports,min/optimized/react.js'
// import { render } from 'https://cdn.skypack.dev/pin/react-dom@v17.0.1-N7YTiyGWtBI97HFLtv0f/mode=imports,min/optimized/react-dom.js'

import { createElement } from 'https://cdn.skypack.dev/react'
import { render } from 'https://cdn.skypack.dev/react-dom'

import { userCardStyles, getUserCardHTML } from './templates.js'

class UserCard extends HTMLElement {
  constructor() {
    super()
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (this.shadowRoot) {
      this.render(this.shadowRoot.getElementById('root'), { [name]: newValue })
    }
  }

  static get observedAttributes() {
    return ['name', 'surname', 'age', 'imgsrc']
  }

  render(newAttributes = {}) {
    const attributes = Object.fromEntries(Array.from(this.attributes).map(({ name, value }) => [name, value]))

    const template = getUserCardHTML(Object.assign(attributes, newAttributes))

    const userCardElement = createElement('div', { id: 'template', dangerouslySetInnerHTML: { __html: template } })
    render(userCardElement, this.mountPoint)
  }

  connectedCallback() {
    this.attachShadow({ mode: 'open' })

    const style = document.createElement('style')
    style.innerHTML = userCardStyles
    this.shadowRoot.appendChild(style)

    this.mountPoint = document.createElement('div')
    this.mountPoint.id = 'root'
    this.shadowRoot.appendChild(this.mountPoint)

    this.render()
  }
}

customElements.define('user-card', UserCard)

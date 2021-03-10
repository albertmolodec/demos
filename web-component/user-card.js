import { createElement } from 'https://cdn.skypack.dev/pin/react@v17.0.1-yH0aYV1FOvoIPeKBbHxg/mode=imports,min/optimized/react.js'
import { render } from 'https://cdn.skypack.dev/pin/react-dom@v17.0.1-N7YTiyGWtBI97HFLtv0f/mode=imports,min/optimized/react-dom.js'

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

  render(container, newAttributes = {}) {
    const attributes = Object.fromEntries(Array.from(this.attributes).map(({ name, value }) => [name, value]))

    const template = getUserCardHTML(Object.assign(attributes, newAttributes))

    render(createElement('div', { id: 'template', dangerouslySetInnerHTML: { __html: template } }), container)
  }

  connectedCallback() {
    this.attachShadow({ mode: 'open' })

    const style = document.createElement('style')
    style.innerHTML = userCardStyles
    this.shadowRoot.appendChild(style)

    const mountPoint = document.createElement('div')
    mountPoint.id = 'root'
    this.shadowRoot.appendChild(mountPoint)

    this.render(mountPoint)
  }
}

customElements.define('user-card', UserCard)

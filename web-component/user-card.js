import { createElement } from 'https://cdn.skypack.dev/pin/react@v17.0.1-yH0aYV1FOvoIPeKBbHxg/mode=imports,min/optimized/react.js'
import { render } from 'https://cdn.skypack.dev/pin/react-dom@v17.0.1-N7YTiyGWtBI97HFLtv0f/mode=imports,min/optimized/react-dom.js'

import { userCardStyles, getUserCardHTML } from './templates.js'

class UserCard extends HTMLElement {
  constructor() {
    super()

    this.attachShadow({ mode: 'open' })
    const style = document.createElement('style')
    style.innerHTML = userCardStyles
    this.shadowRoot.appendChild(style)

    this.mountPoint = document.createElement('div')
    this.mountPoint.id = 'root'
    this.shadowRoot.appendChild(this.mountPoint)

    const attributes = Object.fromEntries(Array.from(this.attributes).map(({ name, value }) => [name, value]))
    const template = getUserCardHTML(attributes)
    const userCardElement = createElement('div', { id: 'template', dangerouslySetInnerHTML: { __html: template } })
    render(userCardElement, this.mountPoint)
  }

  attributeChangedCallback(name, oldValue, newValue) {
    const rerenderingElement = this.shadowRoot.getElementById(name)
    if (name === 'imgsrc') {
      console.log(`Attribute imgsrc has been changed. Replace image source from "${oldValue}" to "${newValue}".`)
      rerenderingElement.setAttribute('src', newValue)
    } else {
      console.log(`Attribute "${name}" has been changed. Replace value "${oldValue}" to "${newValue}".`)
      render(newValue, rerenderingElement)
    }
  }

  static get observedAttributes() {
    return ['name', 'surname', 'age', 'imgsrc']
  }
}

customElements.define('user-card', UserCard)

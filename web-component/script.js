import { createElement } from 'https://cdn.skypack.dev/pin/react@v17.0.1-yH0aYV1FOvoIPeKBbHxg/mode=imports,min/optimized/react.js'
import { render } from 'https://cdn.skypack.dev/pin/react-dom@v17.0.1-N7YTiyGWtBI97HFLtv0f/mode=imports,min/optimized/react-dom.js'

const JON_SNOW_IMG_SRC =
  'https://cdn.vox-cdn.com/thumbor/l9l4iztkKVgnxD0vMmqYwknBZu4=/99x0:1179x810/1400x1400/filters:focal(99x0:1179x810):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/46094226/Jon_snow.0.jpg'

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

    Object.assign(attributes, newAttributes)

    const { name = 'Jon', surname = 'Snow', age = '14', imgsrc = JON_SNOW_IMG_SRC } = attributes

    const template = /*html*/ `<div class="card">
    <img class="card__avatar" src="${imgsrc}" alt="User avatar">
    <div class="card__info">
      <div class="card__name">
        ${name}
        ${surname}
      </div>
      <div class="card__age">
        ${age} y.o.
      </div>
    </div>
  </div>`

    render(createElement('div', { id: 'template', dangerouslySetInnerHTML: { __html: template } }), container)
  }

  connectedCallback() {
    this.attachShadow({ mode: 'open' })

    const style = document.createElement('style')
    style.innerHTML = `
      * {
        box-sizing: border-box;
      }

      .card {
        font-family: Roboto, Helvetica Neue, Helvetica, Arial, "sans-serif";
        font-weight: 300;
        color: white;
        width: 300px;
        height: 400px;
        display: flex;
        flex-direction: column;
        border-radius: 5px;
        background-color: #262626;
      }

      .card__avatar {
        max-height: 70%;
        object-fit: contain;
        object-position: center center;
        padding: 20px;
        display: flex;
        flex-basis: 70%;
      }

      .card__info {
        padding: 20px;
        display: flex;
        flex-direction: column;
        flex-basis: 30%;
      }

      .card__name {
        font-size: 24px;
      }

      .card__name::after {
        content: "";
        display: block;
        width: 20%;
        height: 2px;
        background-color: #f2d423;
        margin: 5px 0 3px;
      }

      .card__age {
        font-size: 15px;
        margin-top: 8px;
      }
    `
    this.shadowRoot.appendChild(style)

    const mountPoint = document.createElement('div')
    mountPoint.id = 'root'
    this.shadowRoot.appendChild(mountPoint)

    this.render(mountPoint)
  }
}

customElements.define('user-card', UserCard)

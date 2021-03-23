function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map((child) =>
        typeof child === 'object' ? child : createTextElement(child)
      ),
    },
  }
}

function createTextElement(text) {
  return {
    type: 'TEXT_ELEMENT',
    props: {
      nodeValue: text,
      children: [],
    },
  }
}

function render(element, container) {
  const dom =
    element.type === 'TEXT_ELEMENT'
      ? document.createTextNode('')
      : document.createElement(element.type)

  const isProperty = (key) => key !== 'children'
  const propNames = Object.keys(element.props).filter(isProperty)
  for (let name of propNames) {
    dom[name] = element.props[name]
  }

  for (let child of element.props.children) {
    render(child, dom)
  }

  container.appendChild(dom)
}

const Didact = {
  createElement,
  render,
}

export default Didact

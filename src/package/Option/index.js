import Element from '../Select/option'

Element.install = function (Vue) {
  Vue.component(Element.name, Element)
}

export default Element

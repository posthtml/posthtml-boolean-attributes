'use strict'
const normalize = require('./normalize')

module.exports = function (options = {}) {
  const boolAttrs = options.boolAttrs || true
  const attributes = normalize(boolAttrs)

  function booleanAttributes (tree) {
    return tree.walk(node => {
      if (node.attrs) {
        attributes.forEach(attr => {
          if (Reflect.has(node.attrs, attr) && node.attrs[attr] === '') {
            node.attrs[attr] = true
          }

          if (attr instanceof RegExp) {
            Object.keys(node.attrs).forEach(nodeAttrKey => {
              if (attr.test(nodeAttrKey) && node.attrs[nodeAttrKey] === '') {
                node.attrs[nodeAttrKey] = true
              }
            })
          }
        })
      }
      return node
    })
  }

  return booleanAttributes
}

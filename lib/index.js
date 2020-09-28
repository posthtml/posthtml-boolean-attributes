'use strict'
const normalize = require('./normalize')

module.exports = function (options = {}) {
  const enabled = options.enabled || true
  const attributes = normalize(enabled)

  function booleanAttributes (tree) {
    return tree.walk(node => {
      if (node.attrs) {
        attributes.forEach(attr => {
          if (Reflect.has(node.attrs, attr) && node.attrs[attr] === '') {
            node.attrs[attr] = true
          }
        })
      }
      return node
    })
  }

  return booleanAttributes
}

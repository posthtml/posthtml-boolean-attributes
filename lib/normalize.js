const BOOLEAN_ATTRIBUTES = require('./boolean-attributes')

module.exports = function normalize (attrs) {
  if (typeof attrs === 'boolean' && attrs) {
    return BOOLEAN_ATTRIBUTES
  }

  if (Array.isArray(attrs)) {
    const attributes = [...BOOLEAN_ATTRIBUTES]

    attrs.forEach(attr => {
      if (attr instanceof RegExp) {
        return attributes.push(attr)
      }

      if (attr.startsWith('!')) {
        return attributes.splice(attributes.indexOf(attr.slice(1)), 1)
      }

      if (attributes.includes(attr)) {
        return
      }

      if (!attributes.includes(attr)) {
        return attributes.push(attr)
      }
    })
    return attributes
  }

  return []
}

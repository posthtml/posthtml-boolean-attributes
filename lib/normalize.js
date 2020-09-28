const BOOLEAN_ATTRIBUTES = require('./boolean-attributes')

module.exports = function normalize (attrs) {
  if (typeof attrs === 'boolean' && attrs) {
    return BOOLEAN_ATTRIBUTES
  }

  if (Array.isArray(attrs)) {
    const attributes = [...BOOLEAN_ATTRIBUTES]

    attrs.forEach(attr => {
      const exclude = attr.startsWith('!')
      attr = exclude ? attr.slice(1) : attr

      if (exclude) {
        return attributes.splice(attributes.indexOf(attr), 1)
      }

      if (attributes.includes(attr)) {
        return
      }

      if (!attributes.includes(attr)) {
        attributes.push(attr)
      }
    })
    return attributes
  }

  return []
}

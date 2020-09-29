'use strict'

const test = require('ava')
const plugin = require('../lib')
const { readFileSync } = require('fs')
const path = require('path')
const posthtml = require('posthtml')
const fixtures = path.join(__dirname, 'fixtures')

test('basic', (t) => {
  return compare(t, 'basic')
})

test('regexp', (t) => {
  return compare(t, 'regexp', {
    boolAttrs: [/^\${/]
  })
})

function compare (t, name, pluginOptions = {}) {
  const html = readFileSync(path.join(fixtures, `${name}.html`), 'utf8')
  const expected = readFileSync(path.join(fixtures, `${name}.expected.html`), 'utf8')

  return posthtml([plugin(pluginOptions)])
    .process(html)
    .then((res) => {
      t.deepEqual(res.html, expected)
    })
}

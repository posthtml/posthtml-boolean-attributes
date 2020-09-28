import test from 'ava'
import normalize from '../lib/normalize'

test('Should return empty array', t => {
  t.deepEqual(normalize(), [])
})

test('Should return all boolean attributes', t => {
  t.snapshot(normalize(true))
})

test('Should return with add custome attr in list', t => {
  t.snapshot(normalize(['test']))
})

test('Should return with exclude one attr in list', t => {
  t.snapshot(normalize(['!open']))
})

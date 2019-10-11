QUnit.module('MAIN MODULE', {})  // group all these tests together

QUnit.test('TEST add', assert => {
  assert.equal(add(3, 2), 7, 'correct')
  assert.equal(add(-1, -1), -3, 'correct')
  assert.equal(add(-10, 10), 10, 'correct')
  assert.equal(add(-1, 10), 19, 'correct')
  assert.equal(add(0, 10), 20, 'correct')
})

window.addEventListener('Load', ()=>
{
  Qunit.start()
})
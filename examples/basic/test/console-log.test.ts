import {afterEach, beforeEach, test, describe, it} from 'vitest'

beforeEach((ctx) => {
  console.log(`Before '${ctx.meta.name}'`);
});

afterEach((ctx) => {
  console.log(`After '${ctx.meta.name}'`);
});

test('root test', () => {
  console.log(`Running 'root test'`);
})

describe('foo', () => {
  it('bar', () => {
    console.log(`Running 'bar'`);
  })
  it('baz', () => {
    console.log(`Running 'baz'`);
  })
})

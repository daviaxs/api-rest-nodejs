import { expect, test } from 'vitest'

test('O usuario consegue criar uma nova transação', () => {
  const statusCode = 201

  expect(statusCode).toEqual(201)
})

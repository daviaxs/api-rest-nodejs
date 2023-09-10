import request from 'supertest'
import { afterAll, beforeAll, test } from 'vitest'
import { app } from '../src/app'

beforeAll(async () => {
  await app.ready()
})

afterAll(async () => {
  await app.close()
})

test('O usuario consegue criar uma nova transação', async () => {
  await request(app.server)
    .post('/transactions')
    .send({
      title: 'New transactions',
      amount: 2000,
      type: 'credit',
    })
    .expect(201)
})

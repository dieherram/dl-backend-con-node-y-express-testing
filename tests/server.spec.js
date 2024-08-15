const request = require('supertest')
const server = require('../index')

const id = Math.floor(Math.random() * 9999)
const coffee = { id, nombre: 'test coffee' }

describe('Operaciones CRUD de cafes', () => {
  test('01 [GET /cafes] | Retorna un statuscode 200 y un array con al menos 1 elemento', async () => {
    const response = await request(server).get('/cafes').send()
    expect(response.status).toBe(200)
    expect(response.body).toBeInstanceOf(Array)
    expect(response.body.length).toBeGreaterThanOrEqual(1)
  })

  test('02 [DELETE /delete] | Retorna un statuscode 404 al intentar eliminar un café con un id que no existe', async () => {
    const response = await request(server)
      .delete('/cafes/fake_coffee_id')
      .set('Authorization', 'fake_token')
      .send()

    expect(response.status).toBe(404)
  })

  test('03 [POST /cafes] | Retorna un statuscode 201 cuando se crea un nuevo café', async () => {
    const response = await request(server).post('/cafes').send(coffee)
    expect(response.status).toBe(201)
    expect(response.body).toContainEqual(coffee)
  })

  test('04 [PUT /cafes/:id] | Retorna un statuscode 400 al intentar actualizar un cafe, donde params id no corresponda al payload id', async () => {
    const response = await request(server).put('/cafes/fake_coffee_id').send(coffee)
    expect(response.status).toBe(400)
  })
})

const request = require('supertest');
const express = require('express');
const usersRouter = require('../routes/users');
const { resetUsers } = require('../routes/users');

const app = express();
app.use(express.json());
app.use('/users', usersRouter);

describe('Users API', () => {
  beforeEach(() => {
    resetUsers();  // Reset users to initial state before each test
  });

  test('GET /users should return array', async () => {
    const res = await request(app).get('/users');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test('POST /users should create a user', async () => {
    const res = await request(app).post('/users').send({ name: 'Charlie' });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.name).toBe('Charlie');
  });

  test('GET /users/:id should return user', async () => {
    const res = await request(app).get('/users/1');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('name');
  });

  test('PUT /users/:id should update user', async () => {
    const res = await request(app).put('/users/1').send({ name: 'Alice Updated' });
    expect(res.statusCode).toBe(200);
    expect(res.body.name).toBe('Alice Updated');
  });

  test('DELETE /users/:id should remove user', async () => {
    const res = await request(app).delete('/users/1');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('name');
  });
});


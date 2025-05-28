const request = require('supertest');
const express = require('express');
const usersRouter = require('../routes/users');

const app = express();
app.use('/users', usersRouter);

test('GET /users', async () => {
  const res = await request(app).get('/users');
  expect(res.statusCode).toBe(200);
  expect(Array.isArray(res.body)).toBe(true);
});

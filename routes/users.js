// routes/users.js
const express = require('express');
const router = express.Router();

let users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];

// Function to reset users (for testing)
function resetUsers() {
  users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
  ];
}

// GET /users - get all users
router.get('/', (req, res) => {
  res.json(users);
});

// POST /users - add new user
router.post('/', (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: 'Name is required' });

  const newUser = { id: users.length + 1, name };
  users.push(newUser);
  res.status(201).json(newUser);
});

// GET /users/:id - get one user by ID
router.get('/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ error: 'User not found' });

  res.json(user);
});

// PUT /users/:id - update user
router.put('/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ error: 'User not found' });

  const { name } = req.body;
  if (name) user.name = name;

  res.json(user);
});

// DELETE /users/:id - remove user
router.delete('/:id', (req, res) => {
  const index = users.findIndex(u => u.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: 'User not found' });

  const removed = users.splice(index, 1)[0];
  res.json(removed);
});

module.exports = router;
module.exports.resetUsers = resetUsers;

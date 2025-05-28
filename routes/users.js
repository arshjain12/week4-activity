const express = require('express');
const router = express.Router();

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
  { id: 4, name: "Diana" },
  { id: 5, name: "Ethan" },
  { id: 6, name: "Fiona" },
  { id: 7, name: "George" },
  { id: 8, name: "Hannah" },
  { id: 9, name: "Ian" },
  { id: 10, name: "Jane" },
  { id: 11, name: "Kevin" },
  { id: 12, name: "Laura" },
  { id: 13, name: "Mike" },
  { id: 14, name: "Nina" },
  { id: 15, name: "Oscar" },
  { id: 16, name: "Paula" },
  { id: 17, name: "Quinn" },
  { id: 18, name: "Rachel" },
  { id: 19, name: "Steve" },
  { id: 20, name: "Tina" },
  { id: 21, name: "Uma" },
  { id: 22, name: "Victor" },
  { id: 23, name: "Wendy" },
  { id: 24, name: "Xavier" },
  { id: 25, name: "Yara" },
  { id: 26, name: "Zack" }
];

router.get('/', (req, res) => res.json(users));

module.exports = router;

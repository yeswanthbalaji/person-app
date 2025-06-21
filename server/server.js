const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let people = [
  { name: 'John Doe', email: 'john@example.com' }
];

app.get('/api/people', (req, res) => {
  res.json(people);
});

app.post('/api/people', (req, res) => {
  const person = req.body;
  people.push(person);
  res.status(201).json(person);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

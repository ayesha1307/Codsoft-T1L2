const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

let quizzes = [];

// Create Quiz
app.post('/quiz', (req, res) => {
  const quiz = req.body;
  quizzes.push(quiz);
  res.json({ message: 'Quiz created successfully!', quiz });
});

// Get All Quizzes
app.get('/quiz', (req, res) => {
  res.json(quizzes);
});

// Get Quiz by Title
app.get('/quiz/:title', (req, res) => {
  const quiz = quizzes.find(q => q.title === req.params.title);
  if (quiz) {
    res.json(quiz);
  } else {
    res.status(404).json({ message: 'Quiz not found' });
  }
});

// Start Server
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});

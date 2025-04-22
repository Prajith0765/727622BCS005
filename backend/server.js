const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Sample data
let users = { "1": "John Doe", "10": "Helen Moore", "11": "Ivy Taylor", "12": "Jack Anderson", "13": "Kathy Thomas" };
let posts = [
  { id: 246, userid: 1, content: "Post about ant" },
  { id: 161, userid: 1, content: "Post about elephant" },
  { id: 150, userid: 1, content: "Post about ocean" },
  { id: 370, userid: 1, content: "Post about monkey" }
];

// API Endpoints
app.get('/users', (req, res) => res.json({ users: Object.fromEntries(Object.entries(users).slice(0, 5)) }));
app.get('/posts', (req, res) => res.json({ posts: posts.sort((a, b) => b.id - a.id) }));

app.listen(port, () => console.log(`Server running on port ${port}`));
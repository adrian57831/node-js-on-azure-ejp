const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors());

app.get('/roll/:sides', (req, res) => {
  const sides = parseInt(req.params.sides);
  if (!sides || sides < 1) {
    return res.status(400).json({ error: 'Invalid number of sides' });
  }
  const result = Math.floor(Math.random() * sides) + 1;
  res.json({ sides, result });
});

// Wake-up route for async calls
app.get('/wake', (req, res) => {
  res.send('Server is awake!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Dice Roller API running on port ${PORT}`);
});
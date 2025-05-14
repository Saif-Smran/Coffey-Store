const express = require('express');
const cors = require('cors');
const mongodb = require('mongodb');
const dotenv = require('dotenv');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Coffee Shop API');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
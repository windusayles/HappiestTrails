const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json('Get Successful');
}); 

app.listen(PORT, () => {
  console.log('Server is listening on Port', PORT);
});
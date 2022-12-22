const express = require('express');

const app = express();
const path = require('path')

app.get('*', (req, res) => {
  console.log('111111', path.resolve(__dirname, 'build', 'index.html'));
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});


app.listen(80, () => {
    console.log(`Server has been sterted on port 80`);
});
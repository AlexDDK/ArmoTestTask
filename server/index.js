const express = require('express');

const app = express();

app.get('*', (req, res) => {
  console.log('111111');
  res.sendFile(index.html);
});


app.listen(80, () => {
    console.log(`Server has been sterted on port 80`);
});
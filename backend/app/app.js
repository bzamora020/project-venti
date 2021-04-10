const express = require('express');
const app = express();
const port = 3000;
const userRoute = require('./Routes/user');

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.use('/user', userRoute);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})
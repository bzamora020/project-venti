const express = require('express');
const app = express();
const port = 8000;
const userRouter = require('./Routes/user');
const authRouter = require('./Routes/auth');
const helmet = require('helmet');
const bodyParser = require('body-parser');

app.use(helmet());
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})
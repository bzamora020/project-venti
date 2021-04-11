const express = require('express');
const app = express();
const port = 8000;
const userRouter = require('./Routes/user');
const authRouter = require('./Routes/auth');
const postRouter = require('./Routes/post');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const path = require('path');
const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(bodyParser.json())

const root = require('path').join(__dirname,'build');

app.use(express.static(root));
app.get("*", (req, res) => {
    res.sendFile('index.html', { root });
});

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/posts', postRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})
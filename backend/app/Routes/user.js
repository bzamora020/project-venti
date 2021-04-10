const express = require('express');
const user = express.Router();
const session = require('./session');
const db = require('../db');

user.post('/getHome', (req, res)=>{
    let sessionToken = req.cookies['session'];
    session.verifySessionToken()
        .then((res)=>{

        })
        .catch((error)=>{
            console.error(error);
            res.status(403).send({error:"Failed authentication!"});
        })
});

module.exports = user;
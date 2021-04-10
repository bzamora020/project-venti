const express = require('express');
const auth = express.Router();
const db = require('../db');
const bcrypt = require('bcrypt');
const session = require('./session');
const { v4: uuidv4 } = require('uuid');
const saltRounds = 10;


auth.post('/register', (req, res)=>{
    let user = req.body;

    db.query(`SELECT email FROM users WHERE email=${db.escape(user.email)}`, (error, results)=>{
        if(error){
            console.error(error);
        }
        else{
            if(results.length == 0){
                bcrypt.hash(user.password, saltRounds, function(err, password_hashed) {
                    if(err){
                        console.error("Unable to hash user password: ", err);
                    }
                    else{
                        let registerQuery = `INSERT INTO users (name, email, password) VALUES (${db.escape(uuidv4().substring(0,6))}, ${db.escape(user.email)}, ${db.escape(password_hashed)})`;
                        db.query(registerQuery, (error, results)=>{
                            if(error){
                                console.error(error);
                                res.status(500).send({error: "Failed to register user"});
                            }
                            else{
            
                                db.query('SELECT LAST_INSERT_ID()', (error, results)=>{
                                    if(error){
                                        console.error(error);
                                    }
                                    else{
                                        console.log(results);
                                        let user_id = results[0]['LAST_INSERT_ID()'];
                                        console.log(user_id);
                                        session.createSessionToken(user_id)
                                            .then((resp)=>{
                                                console.log(resp);
                                                res.status(200).send({msg: resp});
                                            })
                                            .catch((error)=>{
                                                res.status(500).send({error: error})
                                            })
                                    }
                                })
                            }
                        })
            
                    }
                })
            }
            else{
                res.status(500).send({error: "Email used already"});
            }
        }
    })
})

auth.post('/login', (req, res)=>{
    let user = req.body;
    db.query(`SELECT id, email, password FROM users WHERE email=${db.escape(user.email)}`, (error, results)=>{
        if(error){
            console.error(error);
            res.status(500).send({error:"Something went wrong ):"})
        }
        else{
            if(results.length > 0){
                bcrypt.compare(user.password, results[0].password, function(err, result) {
                    if(err){
                        console.error(err);
                    }
                    else{
                        if(result){
                            session.createSessionToken(results[0].id)
                                .then((resp)=>{
                                    console.log(resp);
                                    res.status(200).send({msg: resp});
                                })
                                .catch((error)=>{
                                    res.status(500).send({error: error})
                                })
                        }
                        else{
                            console.log("USER PUT IN WRONG PASSWORD!");
                            res.status(404).send({msg: "Could not find user with such a email/password :/"})
                        }
                    }
                });
            }
            else{
                res.status(404).send({msg: "Could not find user with such a email/password :/"})
            }
        }
    });
})

module.exports = auth;
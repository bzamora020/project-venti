const express = require('express');
const auth = express.Router();
const db = require('../db');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

const saltRounds = 10;

function createSessionToken(user_id){
    return new Promise((resolve,reject)=>{
        bcrypt.hash(uuidv4(), saltRounds, function(err, hash) {
            if(err){
                reject(Error("Failed to hash session token"));
            }
            else{
                let addSessionQuery = `INSERT INTO sessions (token, user_id) VALUES (${db.escape(hash)}, ${db.escape(user_id)})`
                db.query(addSessionQuery, (error, results)=>{
                    if(error){
                        console.error(error);
                        reject(Error("Failed to insert session token into db"));
                    }
                    else{
                        resolve("Created User Session");
                    }
                })
            }
        });
    })
}


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
                                        createSessionToken(user_id)
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

})

module.exports = auth;
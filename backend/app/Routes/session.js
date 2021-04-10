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

function verifySessionToken(sessionToken){
    return new Promise((resolve, reject)=>{
        let verifySessionTokenQuery = `SELECT user_id FROM sessions WHERE token=${sessionToken}`;
        db.query(verifySessionTokenQuery, (error, results)=>{
            if(error){
                console.error(error);
                reject(Error("Failed verify session token"));
            }
            else{
                if(results.length > 0){
                    resolve({user_id: results[0].user_id});
                }
                else{
                    console.log("No session found!");
                    reject(Error("Failed authorization"));
                }
            }
        })
    })
}

module.exports = {
    createSessionToken: createSessionToken,
    verifySessionToken: verifySessionToken,
}
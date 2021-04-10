const express = require('express');
const posts = express.Router();
const session = require('./session');
const db = require('../db');

posts.post('/create', (req, res)=>{
    let post = req.body;
    let sessionToken = req.cookies['session'];
    session.verifySessionToken(sessionToken)
        .then((user)=>{
            let addPostQuery = `INSERT INTO posts (user_id, title, content) VALUES (${db.escape(user.user_id)}, ${post.title}, ${post.content})`;
            db.query(addPostQuery, (error, results)=>{
                if(error){
                    console.error(error);
                    res.status(500).send({error: "Failed to create post ):"});
                }
                else{
                    res.status(200).send({msg: "Created user post"});
                }
            });
        })
        .catch((error)=>{
            console.error(error);
            res.status(403).send({error: "Failed authorize user"});
        });
})

posts.post('/comment', (req, res)=>{
    let newComment = req.body;
    let sessionToken = req.cookies['session'];
    session.verifySessionToken(sessionToken)
        .then((user)=>{
            let addPostQuery = `INSERT INTO posts_comments (post_id, user_id, content) VALUES (${newComment.post_id}, ${db.escape(user.user_id)}, ${newComment.content})`;
            db.query(addPostQuery, (error, results)=>{
                if(error){
                    console.error(error);
                    res.status(500).send({error: "Failed to create post ):"});
                }
                else{
                    res.status(200).send({msg: "Created comment"});
                }
            });
        })
        .catch((error)=>{
            console.error(error);
            res.status(403).send({error: "Failed authorize user"});
        });
});

module.exports = posts;
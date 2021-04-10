const express = require('express');
const user = express.Router();
const session = require('./session');
const db = require('../db');

user.post('/getHome', (req, res)=>{
    let sessionToken = req.cookies['session'];
    session.verifySessionToken(sessionToken)
        .then((user)=>{
            let getUserDataQuery = `SELECT name FROM users WHERE id=${db.escape(user.user_id)}`;
            db.query(getUserDataQuery, (error, results)=>{
                if(error){
                    console.error(error);
                    res.status(500).send({error: "Unable to get user"});
                }
                else{
                    let homeObj = {
                        name: results[0].name,
                        posts: [],
                    }
                    let getUserPostsQuery = `SELECT id, content FROM posts WHERE user_id=${user.user_id}`;
                    db.query(getUserPostsQuery, (error, results)=>{
                        if(error){
                            console.error(error);
                            res.status(500).send({error: "Failed to get user posts"});
                        }
                        else{
                            if(results.length > 0){
                                for(post in results){
                                    let postObj = {
                                        id: post.id,
                                        content: post.conent,
                                        comments: [],
                                    }
                                    let getPostCommentsQuery = `SELECT id, user_id, content, likes FROM posts_comments WHERE post_id=${post.id}`;
                                    db.query(getPostCommentsQuery, (error, results)=>{
                                        if(error){
                                            console.error(error);
                                            res.status(500).send({error: "Failed to get user posts' comments"});
                                        }
                                        else{
                                            for(comment in results){
                                                let getCommenterNameQuery = `SELECT name FROM users WHERE id=${db.escape(comment.user_id)}`;
                                                db.query(getCommenterNameQuery, (error, results)=>{
                                                    if(error){
                                                        console.error(error);
                                                        res.status(500).send({error: "Unable to get commenter name"});
                                                    }
                                                    else{
                                                        comment.name = results[0].name;
                                                        postObj.comments.push(comment);
                                                    }
                                                });
                                            }
                                        }
                        
                                    })
                                    .then(()=>{
                                        homeObj.posts.push(postObj);
                                    })
                                }
                            }
                            else{
                                res.status(200).send({msg: "Post something to make this place feel like home"});
                            }
                        }
                    })
                    .then(()=>{
                        res.status(200).send(homeObj);
                    })
                }
            });
        })
        .catch((error)=>{
            console.error(error);
            res.status(403).send({error:"Failed authentication!"});
        })
});

module.exports = user;
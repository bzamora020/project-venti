const express = require('express');
const user = express.Router();
const session = require('./session');
const db = require('../db');
const request = require('request');

function buildPost(post){
    return new Promise((resolve, reject)=>{

        let postObj = {
            id: post.id,
            title: post.title,
            content: post.content,
            comments: [],
        };
        
        // Builds comments for post
        let getPostCommentsQuery = `SELECT id, user_id, content, likes FROM posts_comments WHERE post_id=${post.id}`;
        db.query(getPostCommentsQuery, (error, comments)=>{
            if(error){
                console.error(error);
                reject(Error("Failed to get user posts' comments"));
            }
            else{
                let counter = 0;
                if(comments.length > 0){
                    for(i = 0; i < comments.length; i++){
                        let buildComments = new Promise((resolve, reject)=>{
                            let comment = comments[i];
                            let getCommenterNameQuery = `SELECT name FROM users WHERE id=${db.escape(comment.user_id)}`;
                            db.query(getCommenterNameQuery, (error, results)=>{
                                if(error){
                                    console.error(error);
                                    reject(Error("Unable to get commenter name"));
                                }
                                else{
                                    comment.name = results[0].name;
                                    postObj.comments.push(comment);
                                    resolve(postObj);
                                }
                            });
                        });
                        buildComments.then((postObj)=>{
                            counter++;
                            if(counter == (comments.length)){
                                resolve(postObj);
                            }
                        })
                        .catch((error)=>{
                            reject(Error(error));
                        })
                    }  
                }
                else{
                    resolve(postObj);
                }              
            }
        });


    })
}

function buildHomeObjPosts(posts){
    return new Promise((resolve, reject)=>{
        let homePosts = [];

        let counter = 0;
        for(i = 0; i < posts.length; i++){
            let buildPostPromise = new Promise((resolve, reject)=>{
                let post = posts[i];
                buildPost(post)
                    .then((postObj)=>{
                        homePosts.push(postObj);
                        resolve(homePosts);
                    })
                    .catch((error)=>{
                        reject(Error(error));
                    })
            })

            buildPostPromise.then((homePosts)=>{
                counter++;
                if(counter == posts.length){
                    console.log(homePosts);
                    resolve(homePosts);
                }
            })
            .catch((error)=>{
                console.error(error);
                reject(Error(error));
            })
        }
    })
}

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
                    let getUserPostsQuery = `SELECT id, title, content FROM posts WHERE user_id=${user.user_id}`;
                    db.query(getUserPostsQuery, (error, posts)=>{
                        if(error){
                            console.error(error);
                            res.status(500).send({error: "Failed to get user posts"});
                        }
                        else{
                            if(posts.length > 0){
                                buildHomeObjPosts(posts)
                                    .then((homeObjPosts)=>{
                                        homeObj.posts = homeObjPosts;
                                        res.status(200).send(homeObj);
                                    })
                                    .catch((error)=>{
                                        console.error(error);
                                        res.status(500).send({error:"Something went wrong D:"});
                                    })
                            }
                            else{
                                res.status(200).send({msg: "Post something to make this place feel like home"});
                            }
                        }
                    })
                }
            });
        })
        .catch((error)=>{
            console.error(error);
            res.status(403).send({error:"Failed authentication!"});
        })
});


user.post('/feed', (req, res)=>{
    let sessionToken = req.cookies['session'];
    session.verifySessionToken(sessionToken)
        .then((user)=>{
            let getUserPostsQuery = `SELECT * FROM posts WHERE user_id=${user.user_id}`;
            db.query(getUserPostsQuery, (error, userPosts)=>{
                if(error){
                    console.error(error);
                    res.status(500).send({error: "Failed to get user posts"});
                }
                else{
                    console.log(userPosts);
                    if(userPosts.length > 0){
                        console.log("SIMILAR RECCOMENDATION");
                        let getAllPostsQuery = `SELECT * FROM posts`;
                        db.query(getAllPostsQuery, (error, allPosts)=>{
                            if(error){
                                console.error(error);
                                res.status(500).send({error:"Unable to get user's feed"})
                            }
                            else{
                                request.post({
                                    headers: {'content-type' : 'application/json'},
                                    body:JSON.stringify({
                                        userPosts: userPosts,
                                        generalPosts: allPosts
                                    }),
                                    url:'https://sim-text.herokuapp.com/simChecker'
                                }, (error, response, body)=>{
                                    if(error){
                                        console.log(error);
                                        res.status(500).send({error:"Unable to get user's feed"})
                                    }
                                    else{
                                        console.log(body);
                                        res.status(200).send({feed: JSON.parse(body)})
                                    }
                                })
                            }
                        });
                    }
                    else{
                        let getAllPostsQuery = `SELECT * FROM posts`;
                        db.query(getAllPostsQuery, (error, allPosts)=>{
                            if(error){
                                console.error(error);
                                res.send({error:"RRR"})
                            }
                            else{
                                console.log("AI RECCOMENDATION");
                                console.log(JSON.stringify(allPosts));
                                request.post({
                                    headers: {'content-type' : 'application/json'},
                                    body:JSON.stringify({
                                        generalPosts: allPosts
                                    }),
                                    url:'https://venti-services.herokuapp.com/emotionEval'
                                    
                                }, (error, response, body)=>{
                                    if(error){
                                        console.log(error);
                                        res.status(500).send({error:"Unable to get user's feed"})
                                    }
                                    else{
                                        console.log(body);
                                        res.status(200).send({feed: JSON.parse(body)})
                                    }
                                })
                            }

                        })
                    }
                }
            })
        })  
        .catch((error)=>{
            console.error(error);
            res.status(403).send({error:"Failed authentication!"});
        })
})


module.exports = user;
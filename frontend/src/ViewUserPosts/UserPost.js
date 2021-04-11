import React from 'react';

const UserPost = (props) => (
    <div className="post">
        <p>{props.header}</p>
        <p>{props.comment}</p>
    </div>
);

export default UserPost;
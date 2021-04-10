import React from 'react';
import UserPost from './UserPost';

const UserPosts = (props) => {
    const allPosts = [
        { header: "Header1", comment: "Comment1"},
        { header: "Header2", comment: "Comment2"},
        { header: "Header3", comment: "Comment3"}
    ];
    return (
        <section>
            {allPosts.map((data) => (
                <UserPost header={data.header} comment={data.comment}/>
            ))};
        </section>
    )
}

export default UserPosts;
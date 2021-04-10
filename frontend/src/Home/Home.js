import React from 'react';
import UserPosts from '../ViewUserPosts/UsersPosts';
import Navbar from '../Navbar/Navbar';

let title="Venti"

function Home() {
    return (
        <div className="container">
            <Navbar title={title} />
            <UserPosts/>
        </div>
    )
}

export default Home;
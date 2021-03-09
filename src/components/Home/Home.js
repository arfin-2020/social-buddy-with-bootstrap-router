import React, { useEffect, useState } from 'react';
import Post from '../post/Post';

const Home = () => {
    const [posts, setPost] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPost(data))
    }, [])
    return (
        <div>
            <h1> This is home </h1>
            <h3>I have got {posts.length} post</h3>
            {
                posts.map(post => <Post post={post} key={post.id}></Post>)
            }
        </div>
    );
};

export default Home;
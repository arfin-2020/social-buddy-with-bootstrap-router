import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PostDetails = () => {
    const { postId } = useParams();
    const [posts, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const { title, body } = posts;
    // console.log(postId);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(res => res.json())
            .then(data => setPost(data))
        // .then(data => console.log(data))
    }, [])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments/${postId}`)
            .then(res => res.json())
            .then(data => setComments(data))
        // .then(data => console.log(data))
    }, [])

    return (
        <div className="container ">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{title} </Card.Title>
                    <Card.Text> {body} </Card.Text>
                    <p>Total comments {comments.email}</p>
                    <Link to={`/posts/about`}><button className="btn btn-success">Click me for more details </button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default PostDetails;
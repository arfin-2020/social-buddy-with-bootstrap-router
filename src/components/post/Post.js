
import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Post = (props) => {
    const { title, id } = props.post;
    const history = useHistory();
    const showCommentsHandler = (id) => {
        history.push(`/posts/${id}`);
    }
    return (

        <div>
            <h3>{title}</h3>
            {/* <Link to={`/posts/${id}`}><button className="btn btn-success">Click me for more details </button></Link> */}
            <button className="btn btn-success" onClick={() => showCommentsHandler(id)}>Show comments</button>
        </div>
    );
};

export default Post;
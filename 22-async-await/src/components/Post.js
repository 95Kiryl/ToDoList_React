import './Post.css';
const Post = ({ userId, id, title, body, }) => {

    return (
        <div className="post">
            <h1>{title}</h1>
            <p>{body}</p>
            <h2>User ID: {userId}</h2>
            <h4>{id}</h4>
        </div>
    )
}

export default Post;
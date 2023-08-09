import { useNavigate } from "react-router-dom";

const Delete = () => {
    const navigate = useNavigate();
    const btnPosts = () => {
        navigate("/posts")
    }
    return (
        <>
            <h1>Delete for Posts</h1>
            <button onClick={btnPosts}>Back to Posts</button>
        </>
    );
}

export default Delete;
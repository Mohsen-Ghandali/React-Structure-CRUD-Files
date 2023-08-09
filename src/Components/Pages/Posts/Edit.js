import { useNavigate } from "react-router-dom";

const Edit = () => {
    const navigate = useNavigate();
    const btnPosts = () => {
        navigate("/posts")
    }

    return (
        <>
            <h1>Edit for Posts</h1>
            <button onClick={btnPosts}>Back to Posts</button>
        </>
    );
}

export default Edit;
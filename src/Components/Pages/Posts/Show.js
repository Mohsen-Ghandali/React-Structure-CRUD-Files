import { useNavigate } from "react-router-dom";

const Show = () => {
    const navigate = useNavigate();
    const btnPosts = () => {
        navigate("/posts")
    }

    return (
        <>
            <h1>Show(Read) for Posts</h1>
            <button onClick={btnPosts}>Back to Posts</button>
        </>
    );
}

export default Show;
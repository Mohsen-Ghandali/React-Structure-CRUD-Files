import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const btnPosts = () => {
    navigate("/posts")
  }
  return (
    <>
      <h1>Create for Posts</h1>
      <button onClick={btnPosts}>Back to Posts</button>
    </>
  );
}

export default Create;
<h1>Create for Posts</h1>
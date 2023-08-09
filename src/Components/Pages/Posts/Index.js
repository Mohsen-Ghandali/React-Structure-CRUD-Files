import { useNavigate } from "react-router-dom";
const Index = () => {

    const navigate = useNavigate();
    const btnShow = () => {
        navigate("/posts/show")
    }
    const btnCreate = () => {
        navigate("/posts/create")
    }
    const btnEdit = () => {
        navigate("/posts/edit")
    }
    const btnDelete = () => {
        navigate("/posts/delete")
    }

    return (
        <>
            <h1>Index for Posts</h1>
            <button onClick={btnShow} >Show</button>
            <button onClick={btnCreate}>Create</button>
            <button onClick={btnEdit}>Edit</button>
            <button onClick={btnDelete}>Delete</button>
        </>

    );
}

export default Index;
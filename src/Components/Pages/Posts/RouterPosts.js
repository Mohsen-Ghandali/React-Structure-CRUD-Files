import { Route, Routes } from "react-router-dom";
import Index from "./Index";
import Show from "./Show";
import Delete from "./Delete";
import Create from "./Create";
import Edit from "./Edit";

const RouterPosts = () => {
    return (

        <>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/:id" element={<Show />} />
                <Route path="/delete" element={<Delete />} />
                <Route path="/create" element={<Create />} />
                <Route path="/edit" element={<Edit />} />
            </Routes>
        </>

    );
}

export default RouterPosts;
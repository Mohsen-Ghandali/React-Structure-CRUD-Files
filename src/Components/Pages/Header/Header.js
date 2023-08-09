import { Link } from "react-router-dom";
import "./Header.css"
const Header = () => {
    return (
        <header>
            <ul>
                <li><Link to="/" >Home</Link></li>
                <li><Link to="/posts">Posts</Link></li>
            </ul>
        </header>

    );
}

export default Header;
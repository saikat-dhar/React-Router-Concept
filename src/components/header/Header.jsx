import {  NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        
    <div className="items-center text-center my-24">
        <nav>
            <NavLink className="text-blue-800 mr-16" to="/">Home</NavLink>
            <NavLink className="text-blue-800 mr-16" to="about">About</NavLink>
            <NavLink className="text-blue-800 mr-16"  to="users">Users</NavLink>
            <NavLink className="text-blue-800 mr-16" to="posts">Posts</NavLink>
            <NavLink className="text-blue-800 mr-16" to="contact">Contact</NavLink>
            <NavLink className="text-blue-800 mr-16" to="blog">Blog</NavLink>
        </nav>
    </div>
    );
};

export default Header;
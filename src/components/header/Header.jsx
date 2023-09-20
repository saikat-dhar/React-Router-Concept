import Home from "./home/Home";
import { Outlet } from "react-router-dom";
const Header = () => {
    return (
        
        <div className="items-center text-center">
            <Home></Home>
            <nav>
            <a className="text-blue-600 mr-4" href="/">Home</a>
            <a className="text-blue-600 mr-4" href="/about">About us</a>
            <a className="text-blue-600 mr-4" href="/contact">Contact</a>
            <a className="text-blue-600 mr-4" href="/blog">Blog</a>
            </nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Header;
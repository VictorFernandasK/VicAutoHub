import { Link } from "react-router-dom";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { ThemeContext } from "../context/ThemeContext";

function Navbar() {
    const bookings = useSelector(
        state => state.bookings.list
    );

    const { changeTheme } = useContext(ThemeContext);

    return (
        <nav className="navbar">
            <Link to="/" className="logo">VicAutoHub</Link>

            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/cars">Cars</Link>
                <Link to="/categories">Categories</Link>
                <Link to="/book">Test Drive</Link>
                <Link to="/bookings">Bookings ({bookings.length})</Link>
                <Link to="/contact">Contact</Link>
                <button onClick={changeTheme}>Theme</button>

            </div>

        </nav>
    );
}

export default Navbar;
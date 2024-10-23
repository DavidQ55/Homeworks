import { NavLink } from 'react-router-dom';
import "../NavComponent.css"
export const NavComponent = () => {
    return (
        <nav className="navbar">
            <NavLink 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} 
                to="/"
            >
                Home
            </NavLink>

            <NavLink 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} 
                to="about"
            >
                About
            </NavLink>

            <NavLink 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} 
                to="login"
            >
                Login
            </NavLink>
        </nav>
    );
};

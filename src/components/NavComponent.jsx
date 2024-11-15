import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from "../Store/slices/authSlice";

export const NavComponent = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);

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
            {!user ? (
                <NavLink
                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                    to="login"
                >
                    Login
                </NavLink>
            ) : (
                <button onClick={() => dispatch(logout())}>Logout</button>
            )}
        </nav>
    );
};

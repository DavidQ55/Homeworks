import { useAuth } from '../context/authContext';
import { Link } from 'react-router-dom';
import "./navComponent.css"

export const NavComponent = () => {
    const { isAuthenticated, username, logout } = useAuth();

    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                {isAuthenticated && (
                    <li>
                        <span>Welcome, {username}</span>
                    </li>
                )}
                {isAuthenticated && (
                    <li>
                        <Link to="/profile">Profile</Link>
                    </li>
                )}
                {!isAuthenticated && (
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                )}
                {isAuthenticated && (
                    <li>
                        <button onClick={logout}>Logout</button>
                    </li>
                )}
            </ul>
        </nav>
    );
};
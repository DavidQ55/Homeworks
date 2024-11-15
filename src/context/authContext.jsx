import { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState(null);
    const [lastVisited, setLastVisited] = useState(localStorage.getItem("lastVisitedPage") || '/');

    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            localStorage.setItem("lastVisitedPage", lastVisited);
        }
    }, [isAuthenticated, lastVisited]);

    const login = (username) => {
        setIsAuthenticated(true);
        setUsername(username);
        navigate(lastVisited);
    };

    const logout = () => {
        setIsAuthenticated(false);
        setUsername(null);
        navigate('/login');
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, username, login, logout, lastVisited, setLastVisited }}>
            {children}
        </AuthContext.Provider>
    );
};
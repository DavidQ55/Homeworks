import { Navigate, Route, Routes } from 'react-router-dom';
import { AboutPage } from './AboutPage';
import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';
import { NavComponent } from '../components/NavComponent';
import { AuthProvider, useAuth } from '../context/authContext';

const MainApp = () => {
    return (
        <AuthProvider>
            <AppRoutes />
        </AuthProvider>
    );
};

const AppRoutes = () => {
    const { isAuthenticated } = useAuth();

    return (
        <>
            <NavComponent />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="login" element={isAuthenticated ? <Navigate to="/" /> : <LoginPage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="profile" element={isAuthenticated ? <ProfilePage /> : <Navigate to="/login" />} />
                <Route path="/*" element={<Navigate to={isAuthenticated ? "/" : "/login"} />} />
            </Routes>
        </>
    );
};

export default MainApp;
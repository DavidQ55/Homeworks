import { Navigate, Route, Routes } from 'react-router-dom';
import { useSelector } from "react-redux";
import { AboutPage } from './AboutPage';
import { HomePage } from './HomePage';
import UploadImage from '../components/uploadImage';
import ImageGallery from '../components/ImageGallery';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import { NavComponent } from '../components/NavComponent';

export const MainApp = () => {
    const { user } = useSelector((state) => state.auth);
    const isAuthenticated = user !== null;

    return (
        <>
            <NavComponent />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="login" element={isAuthenticated ? <Navigate to="/gallery" /> : <LoginPage />} />
                <Route path="register" element={<RegisterPage />} />
                <Route path="images" element={isAuthenticated ? <UploadImage /> : <Navigate to="/login" />} />
                <Route path="gallery" element={isAuthenticated ? <ImageGallery /> : <Navigate to="/login" />} />
                <Route path="/*" element={<Navigate to={isAuthenticated ? "/gallery" : "/login"} />} />
            </Routes>
        </>
    );
};

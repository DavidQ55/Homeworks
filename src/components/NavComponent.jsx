import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Store/slices/authSlice";
import { Link } from "react-router-dom";
import styles from "./NavComponent.module.css";

export const NavComponent = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);
    const isAuthenticated = user !== null;

    return (
        <nav className={styles["navbar"]}>
            <ul>
                <li className={styles["nav-link"]}>
                    <Link to="/">Home</Link>
                </li>
                <li className={styles["nav-link"]}>
                    <Link to="/about">About</Link>
                </li>
                {!isAuthenticated && (
                    <li className={styles["nav-link"]}>
                        <Link to="/login">Login</Link>
                    </li>
                )}
                {isAuthenticated && (
                    <>
                        <li className={styles["nav-link"]}>
                            <Link to="/images">Subir Imágenes</Link>
                        </li>
                        <li className={styles["nav-link"]}>
                            <Link to="/gallery">Galería</Link>
                        </li>
                    </>
                )}
                {isAuthenticated && (
                    <li>
                        <button
                            className={styles["logout-button"]}
                            onClick={() => dispatch(logout())}
                        >
                            Logout
                        </button>
                    </li>
                )}
            </ul>
        </nav>
    );
};

import { useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginWithEmail, loginWithGoogle, logout } from "../Store/slices/authSlice";

const LoginPage = () => {
    const dispatch = useDispatch();
    const { user, status } = useSelector((state) => state.auth);

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const isAuthenticated = useMemo(() => user !== null, [user]);

    const handleLoginWithEmail = () => {
        dispatch(loginWithEmail({ email: loginEmail, password: loginPassword }));
    };

    const handleLoginWithGoogle = () => {
        dispatch(loginWithGoogle());
    };

    return (
        <div>
            {isAuthenticated ? (
                <>
                    <p>Bienvenido, {user?.displayName || user?.email}</p>
                    <button onClick={() => dispatch(logout())}>Logout</button>
                </>
            ) : (
                <>
                    <h2>Login</h2>
                    <form>
                        <input
                            type="email"
                            placeholder="Email"
                            value={loginEmail}
                            onChange={(e) => setLoginEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={loginPassword}
                            onChange={(e) => setLoginPassword(e.target.value)}
                        />
                        <button
                            type="button"
                            onClick={handleLoginWithEmail}
                            disabled={status === "loading" || isAuthenticated}
                        >
                            Login with Email
                        </button>
                    </form>
                    <button
                        type="button"
                        onClick={handleLoginWithGoogle}
                        disabled={status === "loading" || isAuthenticated}
                    >
                        Login with Google
                    </button>

                    <p>
                        No tienes cuenta?{" "}
                        <a href="/register">Regístrate aquí</a>
                    </p>
                </>
            )}
        </div>
    );
};

export default LoginPage;
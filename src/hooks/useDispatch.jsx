import { useDispatch, useSelector } from "react-redux";
import { loginWithEmail } from "../slices/authSlice";

export const LoginPage = () => {
    const dispatch = useDispatch();
    const { status, error } = useSelector((state) => state.auth);

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        dispatch(loginWithEmail({ email, password }));
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <input type="email" name="email" placeholder="Email" required />
                <input type="password" name="password" placeholder="Password" required />
                <button type="submit">Login</button>
            </form>
            {error && <p>{error}</p>}
        </div>
    );
};

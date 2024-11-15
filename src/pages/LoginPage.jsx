import { useDispatch, useSelector } from "react-redux";
import { loginWithGoogle, loginWithEmail } from "../Store/slices/authSlice";

export const LoginPage = () => {
    const dispatch = useDispatch();
    const { status, error } = useSelector((state) => state.auth);

    const handleLoginWithGoogle = (e) => {
        e.preventDefault();
        dispatch(loginWithGoogle());
    };

    const handleLoginWithEmail = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        dispatch(loginWithEmail({ email, password }));
    };

    return (
        <div>
            <h1>Login Page</h1>
            <hr />
            <form onSubmit={handleLoginWithEmail}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button type="submit" disabled={status === "loading"}>
                    {status === "loading" ? "Logging in..." : "Login"}
                </button>
                <button onClick={handleLoginWithGoogle} disabled={status === "loading"}>
                    {status === "loading" ? "Logging in..." : "Login with Google"}
                </button>
            </form>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
};

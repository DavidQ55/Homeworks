import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerWithEmail } from "../Store/slices/authSlice";

const RegisterPage = () => {
    const dispatch = useDispatch();

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const handleRegisterWithEmail = () => {
        dispatch(registerWithEmail({ email: registerEmail, password: registerPassword }));
    };

    return (
        <div>
            <h2>Register</h2>
            <form>
                <input
                    type="email"
                    placeholder="Email"
                    value={registerEmail}
                    onChange={(e) => setRegisterEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={registerPassword}
                    onChange={(e) => setRegisterPassword(e.target.value)}
                />
                <button type="button" onClick={handleRegisterWithEmail}>
                    Register with Email
                </button>
            </form>
        </div>
    );
};

export default RegisterPage;

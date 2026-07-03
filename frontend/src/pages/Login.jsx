import { useState } from "react";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        console.log("Email:", email);
        console.log("Password:", password);
    };

    return (

        <div
            className="container-fluid vh-100 d-flex justify-content-center align-items-center"
            style={{
                background: "linear-gradient(to right, #4facfe, #00f2fe)"
            }}
        >

            <div className="card shadow-lg p-4" style={{ width: "420px", borderRadius: "15px" }}>

                <h2 className="text-center mb-2">
                    🤖 AI Resume Assistant
                </h2>

                <p className="text-center text-muted mb-4">
                    Login to your account
                </p>

                <form onSubmit={handleLogin}>

                    <div className="mb-3">

                        <label className="form-label">
                            Email
                        </label>

                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                    </div>

                    <div className="mb-4">

                        <label className="form-label">
                            Password
                        </label>

                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />

                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary w-100"
                    >
                        Login
                    </button>

                </form>

                <p className="text-center mt-3">

                    Don't have an account?

                    <a
                        href="/register"
                        className="text-decoration-none ms-1"
                    >
                        Register
                    </a>

                </p>

            </div>

        </div>

    );
}

export default Login;
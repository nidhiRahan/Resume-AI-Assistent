import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";
import { toast } from "react-toastify";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {

    e.preventDefault();

    try {

        const response = await api.post("/auth/login", {

            email,
            password

        });

        console.log("result is ",response.data);
localStorage.setItem("token", response.data.token);
localStorage.setItem("resumeId", response.data.resumeId);
localStorage.setItem("name", response.data.name);
        localStorage.setItem("token", response.data.token);

       // alert("Login Successful ✅");
        toast.success("Login Successful");
       console.log("output is::",localStorage.getItem("resumeId"));
        await new Promise(resolve => setTimeout(resolve, 1000));

        navigate("/dashboard");

    } catch (error) {

        console.log(error);

          toast.error(
        error.response?.data?.message ||
        "Invalid Email or Password"
    );

    }

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

                    <Link
                        to="/register"
                        className="text-decoration-none ms-1"
                    >
                        Register
                    </Link>

                </p>

            </div>

        </div>

    );
}

export default Login;
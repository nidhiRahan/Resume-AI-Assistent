import { useState } from "react";
import { Link } from "react-router-dom";
function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleRegister = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        console.log({
            name,
            email,
            password
        });
    };

    return (

        <div
            className="container-fluid vh-100 d-flex justify-content-center align-items-center"
            style={{
                background: "linear-gradient(to right, #4facfe, #00f2fe)"
            }}
        >

            <div
                className="card shadow-lg p-4"
                style={{
                    width: "430px",
                    borderRadius: "15px"
                }}
            >

                <h2 className="text-center mb-2">
                    🤖 AI Resume Assistant
                </h2>

                <p className="text-center text-muted mb-4">
                    Create your account
                </p>

                <form onSubmit={handleRegister}>

                    <div className="mb-3">
                        <label className="form-label">
                            Full Name
                        </label>

                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Full Name"
                            value={name}
                            onChange={(e) =>
                                setName(e.target.value)
                            }
                            required
                        />
                    </div>

                    <div className="mb-3">

                        <label className="form-label">
                            Email
                        </label>

                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter Email"
                            value={email}
                            onChange={(e) =>
                                setEmail(e.target.value)
                            }
                            required
                        />

                    </div>

                    <div className="mb-3">

                        <label className="form-label">
                            Password
                        </label>

                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) =>
                                setPassword(e.target.value)
                            }
                            required
                        />

                    </div>

                    <div className="mb-4">

                        <label className="form-label">
                            Confirm Password
                        </label>

                        <input
                            type="password"
                            className="form-control"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) =>
                                setConfirmPassword(e.target.value)
                            }
                            required
                        />

                    </div>

                    <button
                        type="submit"
                        className="btn btn-success w-100"
                    >
                        Register
                    </button>

                </form>

                <p className="text-center mt-3">

                    Already have an account?

                    <Link
                        to="/login"
                        className="text-decoration-none ms-1"
                    >
                        Login
                    </Link>

                </p>

            </div>

        </div>

    );
}

export default Register;
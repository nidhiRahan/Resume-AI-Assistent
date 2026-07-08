import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";
import { toast } from "react-toastify";
function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleRegister = async (e) => {

    e.preventDefault();

    if (password !== confirmPassword) {

        toast.error("Passwords do not match");

        return;

    }

    try {

        setLoading(true);

        await api.post("/auth/register", {

            name,
            email,
            password

        });

        toast.success("Registration Successful");

        setTimeout(() => {

            navigate("/login");

        }, 1000);

    }

    catch (error) {

        toast.error(

            error.response?.data?.message ||

            "Registration Failed"

        );

    }

    finally {

        setLoading(false);

    }

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
    disabled={loading}
>

    {

        loading

            ? "Registering..."

            : "Register"

    }

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
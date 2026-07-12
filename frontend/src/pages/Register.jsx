import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";
import { toast } from "react-toastify";

function Register() {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [loading, setLoading] = useState(false);

    const [errors, setErrors] = useState({});

    const validateField = (field, value) => {

        let error = "";

        switch (field) {

            case "name":

                if (!value.trim()) {

                    error = "Full Name is required";

                } else if (value.trim().length < 3) {

                    error = "Name must be at least 3 characters";

                }

                break;

            case "email":

                if (!value.trim()) {

                    error = "Email is required";

                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
                ) {

                    error = "Enter a valid email";

                }

                break;

            case "password":

                if (!value) {

                    error = "Password is required";

                } else if (value.length < 6) {

                    error = "Password must be at least 6 characters";

                }

                break;

            case "confirmPassword":

                if (!value) {

                    error = "Confirm Password is required";

                } else if (value !== password) {

                    error = "Passwords do not match";

                }

                break;

            default:
                break;

        }

        setErrors(prev => ({
            ...prev,
            [field]: error
        }));

        return error;

    };

    const handleRegister = async (e) => {

        e.preventDefault();

        const nameError = validateField("name", name);
        const emailError = validateField("email", email);
        const passwordError = validateField("password", password);
        const confirmError = validateField(
            "confirmPassword",
            confirmPassword
        );

        if (
            nameError ||
            emailError ||
            passwordError ||
            confirmError
        ) {
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
                            className={`form-control ${errors.name ? "is-invalid" : ""}`}
                            placeholder="Enter Full Name"
                            value={name}
                            onChange={(e) => {

                                setName(e.target.value);

                                validateField("name", e.target.value);

                            }}
                        />

                        <div className="invalid-feedback">

                            {errors.name}

                        </div>

                    </div>

                    <div className="mb-3">

                        <label className="form-label">

                            Email

                        </label>

                        <input
                            type="email"
                            className={`form-control ${errors.email ? "is-invalid" : ""}`}
                            placeholder="Enter Email"
                            value={email}
                            onChange={(e) => {

                                setEmail(e.target.value);

                                validateField("email", e.target.value);

                            }}
                        />

                        <div className="invalid-feedback">

                            {errors.email}

                        </div>

                    </div>

                    <div className="mb-3">

                        <label className="form-label">

                            Password

                        </label>

                        <input
                            type="password"
                            className={`form-control ${errors.password ? "is-invalid" : ""}`}
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) => {

                                setPassword(e.target.value);

                                validateField("password", e.target.value);

                                if (confirmPassword) {

                                    validateField(
                                        "confirmPassword",
                                        confirmPassword
                                    );

                                }

                            }}
                        />

                        <div className="invalid-feedback">

                            {errors.password}

                        </div>

                    </div>

                    <div className="mb-4">

                        <label className="form-label">

                            Confirm Password

                        </label>

                        <input
                            type="password"
                            className={`form-control ${errors.confirmPassword ? "is-invalid" : ""}`}
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => {

                                setConfirmPassword(e.target.value);

                                validateField(
                                    "confirmPassword",
                                    e.target.value
                                );

                            }}
                        />

                        <div className="invalid-feedback">

                            {errors.confirmPassword}

                        </div>

                    </div>

                    <button
                        type="submit"
                        className="btn btn-success w-100"
                        disabled={loading}
                    >

                        {loading ? "Registering..." : "Register"}

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
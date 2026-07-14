import { useState, useEffect } from "react";
import {
    FaRobot,
    FaBell,
    FaUserCircle,
    FaSignOutAlt
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Navbar() {
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("theme") === "dark"
    );

    const navigate = useNavigate();

    const handleLogout = () => {

        localStorage.removeItem("token");
        localStorage.removeItem("resumeId");

        toast.success("Logged Out Successfully");

        setTimeout(() => {

            navigate("/login", {
                replace: true
            });

        }, 800);

    };

    useEffect(() => {

        if (darkMode) {

            document.body.classList.add("dark-mode");
            localStorage.setItem("theme", "dark");

        } else {

            document.body.classList.remove("dark-mode");
            localStorage.setItem("theme", "light");

        }

    }, [darkMode]);

    return (

        <nav
    className={`navbar navbar-expand-lg shadow-sm px-4 py-3 ${
        darkMode ? "navbar-dark bg-dark" : "bg-white"
    }`}
>

            <div className="container-fluid">

                <h3 className="fw-bold text-primary m-0">

                    <FaRobot className="me-2" />

                    AI Resume Assistant

                </h3>

                <div className="d-flex align-items-center">

                    <button
                        className="btn btn-light rounded-circle me-3"
                    >
                        <FaBell />
                    </button>

                    <span className="fw-semibold me-3">

                        <FaUserCircle className="me-2" />

                        Nidhi

                    </span>

                    <button
                        className="btn btn-dark me-3"
                        onClick={() => setDarkMode(!darkMode)}
                    >
                        {darkMode ? "☀️" : "🌙"}
                    </button>

                    <button
                        className="btn btn-danger"
                        onClick={handleLogout}
                    >

                        <FaSignOutAlt className="me-2" />

                        Logout

                    </button>

                </div>

            </div>

        </nav>

    );

}

export default Navbar;
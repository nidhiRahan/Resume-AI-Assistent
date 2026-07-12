import {
    FaRobot,
    FaBell,
    FaUserCircle,
    FaSignOutAlt
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Navbar() {

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

    return (

        <nav className="navbar navbar-expand-lg bg-white shadow-sm px-4 py-3">

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
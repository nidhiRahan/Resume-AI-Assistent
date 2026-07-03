import { FaRobot, FaBell, FaUserCircle, FaSignOutAlt } from "react-icons/fa";

function Navbar() {

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

                    <button className="btn btn-danger">

                        <FaSignOutAlt className="me-2" />

                        Logout

                    </button>

                </div>

            </div>

        </nav>

    );

}

export default Navbar;
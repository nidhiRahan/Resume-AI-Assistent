import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";

import {
    FaFilePdf,
    FaRobot,
    FaChartLine
} from "react-icons/fa";

function Dashboard() {

    return (

        <>

            <Navbar />

            <div className="container mt-5">

                <h2 className="fw-bold">

                    Welcome Back 👋

                </h2>

                <p className="text-muted">

                    Manage your AI Resume Analysis from one place.

                </p>

            </div>

<div className="row mt-4">

    <StatCard
        title="Resumes Uploaded"
        value="12"
        icon={<FaFilePdf />}
        color="#2563eb"
    />

    <StatCard
        title="AI Analysis"
        value="28"
        icon={<FaRobot />}
        color="#10b981"
    />

    <StatCard
        title="Average Score"
        value="87%"
        icon={<FaChartLine />}
        color="#7c3aed"
    />

</div>
        </>

    );

}

export default Dashboard;
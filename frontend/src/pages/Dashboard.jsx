import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";
import {
    FaFilePdf,
    FaRobot,
    FaChartLine
} from "react-icons/fa";
import ActionCard from "../components/ActionCard";

import {
    FaUpload,
    FaHistory
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

<div className="row mt-2">

    <ActionCard
        title="Upload Resume"
        description="Upload your PDF resume securely."
        icon={<FaUpload />}
        buttonText="Upload"
        buttonColor="#2563eb"
        path="/upload"
    />

    <ActionCard
        title="Analyze Resume"
        description="Analyze your resume using Gemini AI."
        icon={<FaRobot />}
        buttonText="Analyze"
        buttonColor="#10b981"
        path="/analyze"
    />

    <ActionCard
        title="Analysis History"
        description="View previous AI analysis reports."
        icon={<FaHistory />}
        buttonText="View History"
        buttonColor="#f59e0b"
        path="/history"
    />

</div>
        </>

    );

}

export default Dashboard;
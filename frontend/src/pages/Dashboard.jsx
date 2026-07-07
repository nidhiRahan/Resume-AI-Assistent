import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";
import ActionCard from "../components/ActionCard";

import api from "../services/api";

import {
    FaFilePdf,
    FaRobot,
    FaChartLine,
    FaUpload,
    FaHistory,
    FaCalendarAlt
} from "react-icons/fa";

function Dashboard() {

    const [dashboard, setDashboard] = useState({

        totalResumes: 0,

        totalAnalysis: 0,

        averageScore: 0,

        lastAnalysisDate: "No Analysis"

    });

    useEffect(() => {

        loadDashboard();

    }, []);

    const loadDashboard = async () => {

        try {

            const response = await api.get("/dashboard");

            console.log(response.data);

            setDashboard(response.data);

        }

        catch (error) {

            console.log(error);

            alert("Unable to load Dashboard");

        }

    };

    return (

        <>

            <Navbar />

            <div className="container mt-5">

                <h2 className="welcome-title">

                    Welcome Back 👋

                </h2>

                <p className="welcome-subtitle">

                    Manage your AI Resume Analysis from one place.

                </p>

                <div className="row mt-4">

                    <StatCard
                        title="Resumes Uploaded"
                        value={dashboard.totalResumes}
                        icon={<FaFilePdf />}
                        color="#2563eb"
                    />

                    <StatCard
                        title="AI Analysis"
                        value={dashboard.totalAnalysis}
                        icon={<FaRobot />}
                        color="#10b981"
                    />

                    <StatCard
                        title="Average Score"
                        value={`${dashboard.averageScore.toFixed(1)}%`}
                        icon={<FaChartLine />}
                        color="#7c3aed"
                    />

                    <StatCard
                        title="Last Analysis"
                        value={dashboard.lastAnalysisDate}
                        icon={<FaCalendarAlt />}
                        color="#f59e0b"
                    />

                </div>

                <div className="row mt-4">

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

            </div>

        </>

    );

}

export default Dashboard;
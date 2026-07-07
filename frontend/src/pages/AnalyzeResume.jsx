import { useState } from "react";
import Navbar from "../components/Navbar";
import { FaRobot } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
function AnalyzeResume() {
const navigate = useNavigate();


    const [jobDescription, setJobDescription] = useState("");

   const handleAnalyze = async () => {

    if (!jobDescription.trim()) {

        alert("Please enter Job Description");

        return;
    }

    try {

        const resumeId = localStorage.getItem("resumeId");

        const response = await api.post("/ai/analyze", {
    resumeId: Number(localStorage.getItem("resumeId")),
    jobDescription: jobDescription
});

        

        console.log("Result =",response.data);

        navigate("/result", {

            state: response.data

        });

    }

    catch (error) {

        console.log(error);

        alert(

            error.response?.data?.message ||

            "Analysis Failed"

        );

    }

};

    return (
        <>
            <Navbar />

            <div className="container mt-5">

                <div className="card shadow-lg border-0 rounded-4 p-5">

                    <div className="text-center">

                        <FaRobot
                            size={70}
                            className="text-primary mb-3"
                        />

                        <h2 className="fw-bold">
                            AI Resume Analysis
                        </h2>

                        <p className="text-muted">
                            Paste the Job Description below
                        </p>

                    </div>

                    <textarea
                        className="form-control mt-4"
                        rows="10"
                        placeholder="Paste Job Description Here..."
                        value={jobDescription}
                        onChange={(e) =>
                            setJobDescription(e.target.value)
                        }
                    />

                    <button
                        className="btn btn-success mt-4"
                        onClick={handleAnalyze}
                    >
                        Analyze Resume
                    </button>

                </div>

            </div>

        </>
    );
}

export default AnalyzeResume;
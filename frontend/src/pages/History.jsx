import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import {
    FaEye,
    FaDownload,
    FaFilePdf
} from "react-icons/fa";

import api from "../services/api";

function History() {

    const navigate = useNavigate();

    const [reports, setReports] = useState([]);

    useEffect(() => {
        loadHistory();
    }, []);

    const loadHistory = async () => {

        try {

            const resumeId = localStorage.getItem("resumeId");

            const response = await api.get(
                `/analysis/history/${resumeId}`
            );

            console.log(response.data);

            setReports(response.data);

        } catch (error) {

            console.log(error);
            alert("Unable to load history");

        }
    };

    const downloadPdf = async (analysisId) => {

        try {

            const response = await api.get(
                `/analysis/report/${analysisId}`,
                {
                    responseType: "blob"
                }
            );

            const url = window.URL.createObjectURL(
                new Blob([response.data])
            );

            const link = document.createElement("a");

            link.href = url;
            link.download = "analysis-report.pdf";

            document.body.appendChild(link);

            link.click();

            document.body.removeChild(link);

            window.URL.revokeObjectURL(url);

        } catch (error) {

            console.log(error);

            alert("Unable to download PDF");

        }

    };

    return (

        <>
            <Navbar />

            <div className="container mt-5">

                <h2 className="fw-bold mb-4">
                    📜 Analysis History
                </h2>

                {
                    reports.length === 0 ?

                        (

                            <div className="alert alert-warning text-center">

                                No Analysis History Found

                            </div>

                        )

                        :

                        (

                            <div className="row">

                                {

                                    reports.map((report) => (

                                        <div
                                            className="col-md-6 mb-4"
                                            key={report.id}
                                        >

                                            <div className="card border-0 shadow-lg rounded-4 p-4">

                                                <h4>

                                                    <FaFilePdf className="text-danger me-2" />

                                                    Analysis #{report.id}

                                                </h4>

                                                <p className="mt-3">

                                                    ⭐ Match Score :

                                                    <b className="text-success">

                                                        {" "}
                                                        {report.matchScore}%

                                                    </b>

                                                </p>

                                                <p className="text-muted">

                                                    📅{" "}

                                                    {new Date(report.createdAt).toLocaleString()}

                                                </p>

                                                <div className="d-flex gap-3">

                                                    <button
                                                        className="btn btn-primary flex-fill"
                                                        onClick={() =>
                                                            navigate("/result", {
                                                                state: {
                                                                    matchScore: report.matchScore,

                                                                    skillsFound: report.skillsFound
                                                                        ? report.skillsFound.split(", ")
                                                                        : [],

                                                                    missingSkills: report.missingSkills
                                                                        ? report.missingSkills.split(", ")
                                                                        : [],

                                                                    interviewQuestions: report.interviewQuestions
                                                                        ? report.interviewQuestions.split(" | ")
                                                                        : []
                                                                }
                                                            })
                                                        }
                                                    >

                                                        <FaEye className="me-2" />

                                                        View

                                                    </button>

                                                    <button
                                                        className="btn btn-success flex-fill"
                                                        onClick={() => downloadPdf(report.id)}
                                                    >

                                                        <FaDownload className="me-2" />

                                                        PDF

                                                    </button>

                                                </div>

                                            </div>

                                        </div>

                                    ))

                                }

                            </div>

                        )

                }

            </div>

        </>

    );

}

export default History;
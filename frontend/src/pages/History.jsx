import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import {
    FaEye,
    FaDownload,
    FaFilePdf,
    FaArrowLeft
} from "react-icons/fa";
import api from "../services/api";
import { toast } from "react-toastify";

function History() {

    const navigate = useNavigate();

    const [reports, setReports] = useState([]);
    const [loading, setLoading] = useState(true);
    const [downloadingId, setDownloadingId] = useState(null);

    useEffect(() => {
        loadHistory();
    }, []);

    const loadHistory = async () => {

        try {

            const response = await api.get("/analysis/history");

            setReports(response.data);

        } catch (error) {

            console.log(error);

            toast.error(
                error.response?.data?.message ||
                "Unable to load history"
            );

        } finally {

            setLoading(false);

        }

    };

    const downloadPdf = async (analysisId) => {

        try {

            setDownloadingId(analysisId);

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

            toast.success("PDF Downloaded Successfully");

        } catch (error) {

            console.log(error);

            toast.error(
                error.response?.data?.message ||
                "Unable to download PDF"
            );

        } finally {

            setDownloadingId(null);

        }

    };

    return (

        <>
            <Navbar />

            <div className="container mt-5">

                <div className="d-flex justify-content-between align-items-center mb-4">

                    <h2 className="fw-bold m-0">

                        📜 Analysis History

                    </h2>

                    <button
                        className="btn btn-outline-secondary"
                        onClick={() => navigate("/dashboard")}
                    >

                        <FaArrowLeft className="me-2" />

                        Back

                    </button>

                </div>

                {

                    loading ?

                        (

                            <div className="text-center mt-5">

                                <div className="spinner-border text-primary"></div>

                            </div>

                        )

                        :

                        reports.length === 0 ?

                            (

                                <div className="card shadow border-0 rounded-4 p-5 text-center">

                                    <FaFilePdf
                                        size={60}
                                        className="text-secondary mb-3"
                                    />

                                    <h4>No Analysis History Found</h4>

                                    <p className="text-muted">

                                        Analyze your first resume to see reports here.

                                    </p>

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

                                                        <FaFilePdf
                                                            className="text-danger me-2"
                                                        />

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

                                                        {new Date(
                                                            report.createdAt
                                                        ).toLocaleString()}

                                                    </p>

                                                    <div className="d-flex gap-3">

                                                        <button
                                                            className="btn btn-primary flex-fill"
                                                            onClick={() =>
                                                                navigate(
                                                                    "/result",
                                                                    {
                                                                        state: {
                                                                            analysisId: report.id,
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
                                                                    }
                                                                )
                                                            }
                                                        >

                                                            <FaEye className="me-2" />

                                                            View

                                                        </button>

                                                        <button
                                                            className="btn btn-success flex-fill"
                                                            onClick={() =>
                                                                downloadPdf(report.id)
                                                            }
                                                            disabled={
                                                                downloadingId === report.id
                                                            }
                                                        >

                                                            {

                                                                downloadingId === report.id ?

                                                                    <>

                                                                        <span className="spinner-border spinner-border-sm me-2"></span>

                                                                        Downloading...

                                                                    </>

                                                                    :

                                                                    <>

                                                                        <FaDownload className="me-2" />

                                                                        PDF

                                                                    </>

                                                            }

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
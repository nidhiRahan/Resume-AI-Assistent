import { useState } from "react";
import Navbar from "../components/Navbar";
import { FaCloudUploadAlt, FaFilePdf } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { toast } from "react-toastify";

function UploadResume() {

    const navigate = useNavigate();

    const [file, setFile] = useState(null);

    const [loading, setLoading] = useState(false);

    const handleUpload = async () => {

        if (!file) {

            toast.error("Please select a PDF");

            return;

        }

        try {

            setLoading(true);

            const formData = new FormData();

            formData.append("file", file);

            const response = await api.post(

                "/resume/upload",

                formData,

                {

                    headers: {

                        "Content-Type": "multipart/form-data"

                    }

                }

            );

            console.log(response.data);

            toast.success("Resume Uploaded Successfully");

            localStorage.setItem(
                "resumeId",
                response.data.resumeId
            );

            setFile(null);

            navigate("/analyze");

        }

        catch (error) {

            console.log(error);

            toast.error(

                error.response?.data?.message ||

                "Upload Failed"

            );

        }

        finally {

            setLoading(false);

        }

    };

    return (

        <>

            <Navbar />

            <div className="container mt-5">

                <div className="card shadow-lg p-5 border-0 rounded-4">

                    <h2 className="text-center fw-bold mb-3">
                        📄 Upload Resume
                    </h2>

                    <p className="text-center text-muted">
                        Upload your resume in PDF format
                    </p>

                    <div
                        className="border border-2 border-primary rounded-4 p-5 text-center"
                        style={{ cursor: "pointer" }}
                    >

                        <FaCloudUploadAlt
                            size={70}
                            className="text-primary mb-3"
                        />

                        <h5>Drag & Drop Resume</h5>

                        <p className="text-muted">
                            or choose a PDF file
                        </p>

                        <input
                            type="file"
                            accept=".pdf"
                            className="form-control"
                            onChange={(e) =>
                                setFile(e.target.files[0])
                            }
                        />

                    </div>

                    {

                        file && (

                            <div className="alert alert-success mt-4">

                                <FaFilePdf className="me-2" />

                                {file.name}

                            </div>

                        )

                    }

                    <button
                        className="btn btn-primary mt-4 w-100"
                        onClick={handleUpload}
                        disabled={loading}
                    >

                        {

                            loading ? (

                                <>

                                    <span
                                        className="spinner-border spinner-border-sm me-2"
                                        role="status"
                                        aria-hidden="true"
                                    ></span>

                                    Uploading...

                                </>

                            ) : (

                                "Upload Resume"

                            )

                        }

                    </button>

                </div>

            </div>

        </>

    );

}

export default UploadResume;
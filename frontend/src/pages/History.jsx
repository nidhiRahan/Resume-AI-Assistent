import Navbar from "../components/Navbar";
import { FaEye, FaDownload, FaFilePdf } from "react-icons/fa";

function History() {

    const reports = [

        {
            id: 1,
            fileName: "Resume.pdf",
            score: 87,
            date: "19 June 2026"
        },

        {
            id: 2,
            fileName: "Java_Resume.pdf",
            score: 91,
            date: "18 June 2026"
        }

    ];

    return (

        <>
            <Navbar />

            <div className="container mt-5">

                <h2 className="fw-bold mb-4">
                    📜 Analysis History
                </h2>

                <div className="row">

                    {

                        reports.map((report)=>(

                            <div
                                className="col-md-6 mb-4"
                                key={report.id}
                            >

                                <div className="card border-0 shadow-lg rounded-4 p-4">

                                    <h4>

                                        <FaFilePdf
                                            className="text-danger me-2"
                                        />

                                        {report.fileName}

                                    </h4>

                                    <p className="mt-3">

                                        ⭐ Match Score :
                                        <b className="text-success">
                                            {" "}
                                            {report.score}%
                                        </b>

                                    </p>

                                    <p className="text-muted">

                                        📅 {report.date}

                                    </p>

                                    <div className="d-flex gap-3">

                                        <button
                                            className="btn btn-primary flex-fill"
                                        >

                                            <FaEye className="me-2"/>

                                            View

                                        </button>

                                        <button
                                            className="btn btn-success flex-fill"
                                        >

                                            <FaDownload className="me-2"/>

                                            PDF

                                        </button>

                                    </div>

                                </div>

                            </div>

                        ))

                    }

                </div>

            </div>

        </>

    );

}

export default History;
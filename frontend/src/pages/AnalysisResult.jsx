import Navbar from "../components/Navbar";
import {
    FaCheckCircle,
    FaTimesCircle,
    FaDownload,
    FaChartPie
} from "react-icons/fa";

function AnalysisResult() {

    const result = {

        matchScore: 87,

        skillsFound: [
            "Java",
            "Spring Boot",
            "Hibernate",
            "PostgreSQL",
            "JWT"
        ],

        missingSkills: [
            "Docker",
            "Kafka",
            "AWS"
        ],

        interviewQuestions: [

            "Explain Spring Boot architecture.",

            "Difference between JWT and Session?",

            "How does Hibernate work?",

            "What is Dependency Injection?",

            "Explain Docker in your project."

        ]

    };

    return (

        <>
            <Navbar />

            <div className="container mt-5">

                <div className="card border-0 shadow-lg rounded-4 p-5">

                    <div className="text-center">

                        <FaChartPie
                            size={70}
                            className="text-primary mb-3"
                        />

                        <h2 className="fw-bold">
                            AI Resume Analysis Report
                        </h2>

                        <p className="text-muted">
                            Here's your resume analysis summary
                        </p>

                    </div>

                    <div className="text-center mt-4">

                        <div className="score-circle">

    <div className="score-number">

        {result.matchScore}%

    </div>

    <div>

        Match Score

    </div>

</div>

                    </div>

                    <hr className="my-5"/>

                    <div className="row">

                        <div className="col-md-6">

                            <div className="card shadow border-0 rounded-4 p-4 h-100">

                                <h4 className="text-success mb-4">

                                    <FaCheckCircle className="me-2"/>

                                    Skills Found

                                </h4>

                                {

                                    result.skillsFound.map((skill,index)=>(

                                        <span
className="skill-badge skill-found"
>

{skill}

</span>

                                    ))

                                }

                            </div>

                        </div>

                        <div className="col-md-6">

                            <div className="card shadow border-0 rounded-4 p-4 h-100">

                                <h4 className="text-danger mb-4">

                                    <FaTimesCircle className="me-2"/>

                                    Missing Skills

                                </h4>

                                {

                                    result.missingSkills.map((skill,index)=>(

                                        <span
className="skill-badge skill-missing"
>

{skill}

</span>

                                    ))

                                }

                            </div>

                        </div>

                    </div>

                    <div className="card shadow border-0 rounded-4 mt-5 p-4">

                        <h4 className="mb-4">

                            💬 Interview Questions

                        </h4>

                        <ol>

                            {

                                result.interviewQuestions.map((q,index)=>(

                                   <div
key={index}
className="question-card"
>

<b>Q{index+1}.</b> {q}

</div>

                                ))

                            }

                        </ol>

                    </div>

                    <button
                        className="btn btn-primary download-btn w-100 mt-5"
                    >

                        <FaDownload className="me-2"/>

                        Download PDF

                    </button>

                </div>

            </div>

        </>

    );

}

export default AnalysisResult;
import { Link } from "react-router-dom";

function ActionCard({ title, description, icon, buttonText, buttonColor, path }) {

    return (

        <div className="col-md-4 mb-4">

            <div
                className="card border-0 shadow-lg h-100"
                style={{
                    borderRadius: "20px",
                    transition: "0.3s ease"
                }}
            >

                <div className="card-body text-center p-4">

                    <div
                        className="mb-3"
                        style={{
                            fontSize: "45px",
                            color: buttonColor
                        }}
                    >
                        {icon}
                    </div>

                    <h4 className="fw-bold">
                        {title}
                    </h4>

                    <p className="text-muted">
                        {description}
                    </p>

                    <Link
                        to={path}
                            className="btn text-white mt-2 action-btn" 
                            style={{
                            backgroundColor: buttonColor,
                            borderRadius: "10px",
                            width: "100%"
                        }}
                    >
                        {buttonText}
                    </Link>

                </div>

            </div>

        </div>

    );

}

export default ActionCard;
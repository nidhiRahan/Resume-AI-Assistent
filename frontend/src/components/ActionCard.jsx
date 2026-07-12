import { useNavigate } from "react-router-dom";

function ActionCard({
    title,
    description,
    icon,
    buttonText,
    buttonColor,
    path,
    onClick
}) {

    const navigate = useNavigate();

    const handleClick = () => {

        if (onClick) {

            onClick();

        } else if (path) {

            navigate(path);

        }

    };

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

                    <button
                        className="btn mt-3 text-white"
                        style={{ backgroundColor: buttonColor }}
                        onClick={handleClick}
                    >
                        {buttonText}
                    </button>

                </div>

            </div>

        </div>

    );

}

export default ActionCard;
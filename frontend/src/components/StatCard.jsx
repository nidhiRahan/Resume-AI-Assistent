function StatCard({ title, value, icon, color }) {

    return (

        <div className="col-lg-3 col-md-6 mb-4">

            <div
                className="card border-0 shadow-lg h-100 stat-card"
                style={{
                    borderRadius: "20px",
                    transition: "all 0.3s ease",
                    cursor: "pointer"
                }}
            >

                <div className="card-body">

                    <div className="d-flex justify-content-between align-items-center">

                        <div>

                            <h6 className="text-muted mb-2">
                                {title}
                            </h6>

                            <h2 className="fw-bold mb-0">
                                {value}
                            </h2>

                        </div>

                        <div
                            className="stat-icon"
                            style={{
                                color: color,
                                fontSize: "40px"
                            }}
                        >
                            {icon}
                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default StatCard;
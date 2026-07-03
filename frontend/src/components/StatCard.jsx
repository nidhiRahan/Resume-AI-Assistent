function StatCard({ title, value, icon, color }) {

    return (

        <div className="col-md-4 mb-4">

            <div
                className="card border-0 shadow-lg h-100"
                style={{
                    borderRadius: "20px",
                    transition: "0.3s"
                }}
            >

                <div className="card-body">

                    <div className="d-flex justify-content-between align-items-center">

                        <div>

                            <h6 className="text-muted">
                                {title}
                            </h6>

                            <h2 className="fw-bold">
                                {value}
                            </h2>

                        </div>

                        <div
                            style={{
                                fontSize: "40px",
                                color: color
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
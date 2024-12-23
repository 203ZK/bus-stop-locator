function Card({ code, name, services, directions }) {
    return (
        <div className="card">
            <div className="bus-stop-details">
                <span className="bus-stop-code">
                    {code}
                </span>
                <span className="bus-stop-name">
                    {name}
                </span>
            </div>

            <div className="services-details">
                <p>Bus Services:</p>
                <div className="services-grid">
                    Bus services here!
                </div>
            </div>

            <div className="directions-details">
                <p>Directions:</p>
                <div className="direction-steps">
                    Directions here!
                </div>
            </div>
        </div>
    );
}

export default Card;
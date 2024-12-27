import { useState } from "react";

function Card({ station_code, station_name, code, name, services, directions }) {
  const line_colours = {
    "NS": "red", "EW": "green", "NE": "purple", 
    "CC": "yellow", "DT": "blue", "TE": "brown",
    "BP": "grey", "ST": "grey","PT": "grey"
  };

  const [expanded, setExpanded] = useState(false);
  const lines = station_code.split("/");

  const handleToggle = () => {
    if (expanded === true) {
      setExpanded(false);
    } else {
      setExpanded(true);
    }
  };

  return (
    <div className="card">
      {(expanded === false) ? (
        <>
          <div className="card-title">
            <div className="bus-stop-title">
              <span className="bus-stop-code">{code}</span> {name}
            </div>
            <div><button onClick={handleToggle} id="show">Show directions</button></div>
          </div>
        </>
      ) : (
        <>
          <div className="card-title">
            <div className="bus-stop-title">
              <span className="bus-stop-code">{code}</span> {name}
            </div>
            <div><button onClick={handleToggle} id="hide">Hide directions</button></div>
          </div>

          <div className="card-details">
            <div className="services-details">
              <p className="bus-services-title"><strong>Bus Services</strong></p>
              <div className="services-grid">
                {services.map((service) => {
                  return <div key={service} className="bus-service">{service}</div>
                })}
              </div>
            </div>

            <div className="directions-details">
              <div className="station-details">
                <span className="directions-from"><strong>Directions from </strong></span>
                {lines.map((line, idx) => {
                  const prefix = line.substring(0, 2);
                  const colour = line_colours[prefix];
                  const prop = "line " + colour;
                  return <span key={idx} className={prop}>{line}</span>
                })}
                <span className="station-name"> {station_name}:</span>
              </div>
              <div className="direction-steps">
                {directions.map((direction, idx) => {
                  return <div key={idx} className="step">{direction}</div>
                })}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
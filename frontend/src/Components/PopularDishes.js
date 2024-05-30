import React from "react";

export default function PopularDishes(props) {
  return (
    <div
      className="card mb-3"
      style={{
        width: "100px",
        height: "100px",
        marginRight: "20px",
        borderRadius: "50%",
        overflow: "hidden",
        border: "2px solid #000",
        backgroundImage: `url(${props.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="row g-0">
        <div className="col-md-8">
          <div className="card-body d-flex justify-content-between align-items-end">
            <div>
              <h5 className="card-title">{props.name}</h5>
              {/* <img
                src={props.image}
                className="img-fluid "
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                alt="..."
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

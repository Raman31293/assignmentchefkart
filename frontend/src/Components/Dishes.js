import React from "react";
import { useNavigate } from "react-router-dom";

export default function Dishes(props) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/ProductDetails`);
  };
  return (
    <div
      onClick={handleClick}
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: "100px",
      }}
    >
      <div>
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.equipments}</p>
        <p className="card-text">{props.description}</p>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src={props.image}
          className="img-fluid rounded-start"
          alt="..."
          style={{ maxHeight: "100px", maxWidth: "100px" }}
        />
        <button
          type="button"
          class="btn btn-outline-primary"
          style={{ borderRadius: "20%" }}
        >
          Add
        </button>
      </div>
    </div>
  );
}

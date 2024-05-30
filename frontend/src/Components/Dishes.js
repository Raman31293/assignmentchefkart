import React from "react";
import { CiStar } from "react-icons/ci";
import { LuSquareDot } from "react-icons/lu";
import { IoIosArrowForward } from "react-icons/io";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

export default function Dishes(props) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/ProductDetails`);
  };
  return (
    <div
      className="d-flex justify-space-between"
      onClick={handleClick}
      style={{ width: "90%", margin: "auto", borderBottom: "1px solid" }}
    >
      <div style={{ width: "60%" }}>
        <div class="d-flex flex-row bd-highlight mb-3">
          <div
            class="p-2 bd-highlight"
            style={{ fontSize: "25px", fontWeight: "bold" }}
          >
            {props.name}
          </div>
          <div class="p-3 bd-highlight">
            <LuSquareDot style={{ color: "green" }} />
          </div>

          <div class="p-3 bd-highlight">
            <p
              style={{
                fontSize: "15px",
                backgroundColor: "lightgreen",
                color: "white",
              }}
            >
              {props.rating}
              <CiStar />
            </p>
          </div>
        </div>
        <div class="d-flex flex-row bd-highlight mb-3">
          <div
            class="p-1 bd-highlight"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <CgSmartHomeRefrigerator />
            <p style={{ fontSize: "12px" }}>Refrigerator</p>
          </div>
          <div
            class="p-1 bd-highlight"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              borderRight: "1px solid",
            }}
          >
            <CgSmartHomeRefrigerator />
            <p
              style={{
                fontSize: "12px",
              }}
            >
              Refrigerator
            </p>
          </div>

          <div
            class="p-1 bd-highlight"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <p style={{ fontSize: "12px" }}>Ingrediants</p>
            <p style={{ fontSize: "12px", color: "orange" }}>
              View list
              <IoIosArrowForward style={{ color: "orange" }} />
            </p>
          </div>
        </div>
        <p className="card-text">{props.description}</p>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          width: "40%",
        }}
      >
        <img
          src={props.image}
          className="img-fluid "
          alt="..."
          style={{
            width: "100%",
            height: "70%",
            padding: "10px",
            borderRadius: "20px",
          }}
        />
        <button
          type="button"
          className="btn btn-outline-white"
          style={{
            position: "absolute",
            bottom: "25%",
            borderRadius: "20%",
            backgroundColor: "white",
            color: "orange",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
}

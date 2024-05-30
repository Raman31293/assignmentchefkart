import React from "react";
import { IoFastFoodOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";

function Footer() {
  return (
    <div
      style={{
        width: "90%",
        display: "flex",
        gap: "10px",
        alignItems: "center",
        backgroundColor: "Black",
        color: "white",
        padding: "10px",
        borderRadius: "10px",
        margin: "auto",
      }}
    >
      <IoFastFoodOutline style={{ fontSize: "25px", marginRight: "5px" }} />
      <h3 style={{ margin: "0" }}>3 food items selected</h3>
      <FaArrowRight style={{ fontSize: "25px", marginRight: "5px" }} />
    </div>
  );
}

export default Footer;

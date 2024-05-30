import React from "react";
import { IoChevronBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/`);
  };
  return (
    <div
      style={{
        width: "90%",
        display: "flex",
        gap: "10px",
        alignItems: "center",
        backgroundColor: "white",
        padding: "10px",
      }}
    >
      <IoChevronBack
        style={{ fontSize: "25px", marginRight: "5px" }}
        onClick={handleClick}
      />
      <h4 style={{ margin: "0" }}>Select Dishes</h4>
    </div>
  );
}

export default Navbar;

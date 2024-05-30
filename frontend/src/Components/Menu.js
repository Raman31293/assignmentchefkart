import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
export default function Menu() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        gap: "50px",
        alignItems: "center",
        padding: "10px",
        borderRadius: "10px",
        margin: "auto",
      }}
    >
      <h3 style={{ margin: "0" }}>
        Recomended
        <IoMdArrowDropdown />
        <button type="button" class="btn btn-primary">
          Menu
        </button>
      </h3>
    </div>
  );
}

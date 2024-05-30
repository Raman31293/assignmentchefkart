import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
export default function Menu() {
  return (
    <div
      className="d-flex justify-space-between"
      style={{
        width: "90%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
        borderRadius: "10px",
        margin: "auto",
      }}
    >
      <h3 style={{ margin: "0" }}>
        Recomended
        <IoMdArrowDropdown />
      </h3>
      <button type="button" class="btn btn-primary">
        Menu
      </button>
    </div>
  );
}

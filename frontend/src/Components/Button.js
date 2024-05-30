import React from "react";

export default function Button(props) {
  let buttonClass = "btn btn-outline-primary";
  if (props.name === "Italian") {
    buttonClass = "btn btn-warning";
  }
  return (
    <div>
      <button
        type="button"
        className={buttonClass}
        style={{
          marginTop: "30px",
          marginBottom: "10px",
          borderRadius: "10px",
        }}
      >
        {props.name}
      </button>
    </div>
  );
}

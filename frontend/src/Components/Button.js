import React from "react";

export default function Button(props) {
  return (
    <div>
      <button
        type="button"
        class="btn btn-outline-primary"
        style={{ borderRadius: "10px" }}
      >
        {props.name}
      </button>
    </div>
  );
}

import React from "react";

export default function Header() {
  const currentDate = new Date();
  const formattedDate = currentDate.toDateString();
  return (
    <div
      style={{ display: "flex", justifyContent: "space-between", gap: "100px" }}
    >
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            {/* Calendar and date */}
            <div className="me-auto" style={{ marginRight: "50px" }}>
              <h4>
                <i className="fas fa-calendar-alt me-2"></i>
                {formattedDate}
              </h4>
            </div>
            {/* Clock logo and time */}
            <div
              className="d-flex align-items-center"
              style={{ marginLeft: "50px" }}
            >
              <i class="fa-solid fa-clock"></i>
              <h4>10:30 Pm-12:30 Pm</h4>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

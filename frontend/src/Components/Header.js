import React from "react";
import { SlCalender } from "react-icons/sl";
import { TfiAlarmClock } from "react-icons/tfi";
export default function Header() {
  const currentDate = new Date();
  const formattedDate = currentDate.toDateString();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "100px",
        position: "relative",
      }}
    >
      <div
        className="container-fluid"
        style={{ height: "50px", backgroundColor: "black" }}
      ></div>

      <nav
        className=""
        style={{
          position: "absolute",
          top: "50%",
          width: "95%",
          height: "90%",
          backgroundColor: "white",
          borderRadius: "5px",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="container-fluid  ">
          <div className="d-flex align-items-center justify-content-between">
            {/* Calendar and date */}
            <div className="me-auto">
              <p className="p-0 m-0" style={{ fontSize: "14px" }}>
                <SlCalender />
                {formattedDate}
              </p>
            </div>
            {/* Clock logo and time */}
            <div className="d-flex align-items-center">
              <TfiAlarmClock style={{ fontSize: "14px" }} />
              <p className="p-0 m-0" style={{ fontSize: "14px" }}>
                10:30 Pm-12:30 Pm
              </p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

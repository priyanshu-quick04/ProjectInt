import React from "react";

export default function Upp_div() {
  return (
    <div>
      <br />
      <div class="container text-center">
        <div class="row align-items-start flex-lg-row ">
          <div
            class="col"
            style={{ backgroundColor: "blue", color: "white", padding: 10 }}
          >
            Temperature Alarm Settings (deg C)
          </div>
          <div
            class="col"
            style={{ backgroundColor: "red", color: "white", padding: 10 }}
          >
            Hotsopt above 100 deg C
          </div>
          <div
            class="col"
            style={{ backgroundColor: "#ffcc00", color: "white", padding: 10 }}
          >
            High above 90 deg C
          </div>
          <div
            className="col"
            style={{ backgroundColor: "grey", color: "white", padding: 10 }}
          >
            Change
          </div>
        </div>
        <br />
        <br />
        <div class="row align-items-start flex-lg-row ">
          <div
            class="col"
            style={{ backgroundColor: "blue", color: "white", padding: 10 }}
          >
            Total
          </div>
          <div
            class="col"
            style={{ backgroundColor: "grey", color: "white", padding: 10 }}
          >
            Offline
          </div>
          <div
            class="col"
            style={{ backgroundColor: "red", color: "white", padding: 10 }}
          >
            Alert
          </div>
          <div
            className="col"
            style={{ backgroundColor: "#ffcc00", color: "white", padding: 10 }}
          >
            Warning
          </div>
          <div
            className="col"
            style={{ backgroundColor: "green", color: "white", padding: 10 }}
          >
            Normal
          </div>
        </div>
      </div>
    </div>
  );
}

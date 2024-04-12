import React from "react";
import Left_Center from "./Left_Center";
import { useState } from "react";

export default function Center_div() {
  const [colorcode, setColorcode] = useState("green");
  return (
    <div style={{ display: "flex" }}>
      <br />
      <Left_Center colorSet={setColorcode} />
      <div
        style={{
          width: "80%",
          height: "350px",
          backgroundColor: colorcode,
        }}
      ></div>
    </div>
  );
}

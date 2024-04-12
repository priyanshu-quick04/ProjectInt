import React from "react";
import { useState } from "react";

export default function Left_Center({ colorSet }) {
  const [input1Value, setInput1Value] = useState("");
  const [input2Value, setInput2Value] = useState("");
  const [input3Value, setInput3Value] = useState("");
  const handleInputChange = (event, setInputValue) => {
    setInputValue(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the form data, such as sending it to a server
    if (input1Value >= 100 || input2Value >= 100 || input3Value >= 100) {
      colorSet("red");
    } else if (input1Value >= 90 || input2Value >= 90 || input3Value >= 90) {
      colorSet("#ffcc00");
    } else {
      colorSet("green");
    }
    console.log("Form submitted:", input1Value, input2Value, input3Value);
  };
  return (
    <div style={{ margin: "3%" }}>
      <div style={{ fontWeight: "bold" }}>13 ORI-CM-BUSH ZONE 000</div>
      <div>
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <input
            type="text"
            name="temperature1"
            value={input1Value}
            onChange={(event) => handleInputChange(event, setInput1Value)}
            placeholder="Enter Temperature 1 (°C)"
          />
          <input
            type="text"
            name="temperature2"
            value={input2Value}
            onChange={(event) => handleInputChange(event, setInput2Value)}
            placeholder="Enter Temperature 2 (°C)"
          />
          <input
            type="text"
            name="temperature2"
            value={input3Value}
            onChange={(event) => handleInputChange(event, setInput3Value)}
            placeholder="Enter Temperature 3 (°C)"
          />
          <button
            type="submit"
            style={{
              backgroundColor: "blue",
              borderRadius: "5px",
              color: "White",
              marginTop: "5px",
            }}
          >
            Submit
          </button>
        </form>
      </div>
      <div style={{ fontWeight: "bold" }}>GURGAON:LOCATION</div>
    </div>
  );
}

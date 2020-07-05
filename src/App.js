import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Floorplan from "./Floorplan";
import { Office } from "./Office";
import { Stage } from "./Stage";
import { ZoomContainer } from "./ZoomContainer";

function App() {
  return (
    <div className="App">
      <div style={{ width: "100%", height: "600px" }}>
        <Stage>
          <ZoomContainer>
            <Office />
          </ZoomContainer>
        </Stage>
      </div>
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import About from "./Components/About";
import { useState } from "react";

// import logo from "./logo.svg";

function App() {
  const [mode, setMode] = useState("light"); // whether the Dark mode is enable or not.
  //const [toggleMode, setToggleMode] = useState("Light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode('dark');
      console.log("mode in toggleFuntion",mode);
    } else {
      setMode("light");
    }
  };
  return (
    <>
      {/* <Navbar title = "TestTitles" aboutName = "About us"/> */}
      <Navbar
        title="TestUtils"
        aboutName="About us"
        mode={mode}
        toggleMode={toggleMode}
      />
      <div className="container my-3">
        <Textform heading="Enter the text to analyze" />
      </div>
      {/* <About/> */}
    </>
  );
}

export default App;

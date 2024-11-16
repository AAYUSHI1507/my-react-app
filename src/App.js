import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import About from "./Components/About";
// import logo from "./logo.svg";

function App() {
  return (
    <>
      {/* <Navbar title = "TestTitles" aboutName = "About us"/> */}
      <Navbar title="TestUtils" aboutName="About us" />
      <div className="container my-3">
        <Textform heading="Enter the text to analyze"/>
      </div>
      {/* <About/> */}
    </>
  );
}

export default App;

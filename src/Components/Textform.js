import React, { useState } from "react";
import PropTypes from "prop-types";
function Textform(props) {
  const HandleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };
  const HandleUpClick = () => {
    console.log("Converted to the Uppercase." + text.toUpperCase());
    //document.getElementById("myBox").value = text.toUpperCase();
    if (text === "") {
      let dflt = "This is the Default text5";
      setText(dflt);
      console.log("ITs in here " + dflt);
    } else {
      setText(text.toUpperCase());
    }
  };
  const HandleDownClick = () => {
    console.log("Converted to the Lowercase." + text.toLowerCase());
    //document.getElementById("myBox").value = text.toUpperCase();
    if (text === "") {
      let dflt = "This is the Default text5";
      setText(dflt);
      console.log("ITs in here " + dflt);
    } else {
      setText(text.toLowerCase());
    }
  };

  const RemoveTextOnClick = () => {
    console.log("Successfully removed the text");
    // document.getElementById("myBox").value = "";
    let newText = "";
    setText(newText);
  };
  const HandleUpDownClick = () => {
    // console.log("Successfully removed the text");
    // // document.getElementById("myBox").value = "";
    // let newText = "";
    // setText(newText);
    let textarr = text.split(" ");
    let arr2 = "";
    try{
    for (let i = 0; i < textarr.length; i++) {
      let wordarr = textarr[i][0].toUpperCase()+textarr[i].slice(1,textarr[i].length).toLowerCase();
      arr2 = arr2+" "+wordarr;
    }
    setText(arr2);
  } 
  catch(Exception ){
    console.log("Here is the execption occured.");
    setText("Exception occured");
  }
  };
  const [text, setText] = useState("");

  return (
    <>
      <div className="container">
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            onChange={HandleOnChange}
            rows="8"
            value={text}
          ></textarea>
        </div>
        <button className="btn btn-primary my-2" onClick={HandleUpClick}>
          Convert to Uppercase{" "}
        </button>
        <button className="btn btn-dark mx-2" onClick={RemoveTextOnClick}>
          Remove all text
        </button>
        <button className="btn btn-success my-2" onClick={HandleDownClick}>
          Convert to Lowercase{" "}
        </button>
        <button className="btn btn-primary my-2 mx-2" onClick={HandleUpDownClick}>
          Convert to Capitalize
        </button>
      </div>
      <div className="container my-2">
        <h1>Your text summary</h1>
        <p>There are {text.length} and {text.split(" ").length} words</p>
        
        <h2>How much time does it takes to read slowly.</h2>
        <p>It takes {0.008*(text.split(" ").length)} minute</p>

        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
Textform.propTypes = {
  heading: PropTypes.string,
};
export default Textform;

import React,{useState} from 'react'
import PropTypes from 'prop-types'
function Textform(props) {

  const HandleOnChange = (event) =>{
    console.log("On change");
    setText(event.target.value);
}
  const HandleUpClick = () =>{
      console.log("Converted to the Uppercase."+ text.toUpperCase());
      //document.getElementById("myBox").value = text.toUpperCase();
      if(text === ""){
        let dflt= "This is the Default text5";
        setText(dflt);
        console.log("ITs in here "+ dflt);

      }else{
        setText(text.toUpperCase());
      }
  }
  const RemoveTextOnClick = () =>{
    console.log("Successfully removed the text");
    // document.getElementById("myBox").value = "";
    let newText = "";
    setText(newText);
}
const [text, setText] = useState("This is the default contact");

  return (
      <>
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
      <button className="btn btn-primary my-2" onClick={HandleUpClick}>Convert to Uppercase </button>
      <button className="btn btn-dark mx-2" onClick={RemoveTextOnClick}>Remove all text</button>

    </>
    
  )
}
Textform.propTypes = {
    heading: PropTypes.string
}
export default Textform

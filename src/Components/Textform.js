import React from 'react'
import PropTypes from 'prop-types'

function Textform(props) {
  return (
    
      <>
    <h2>{props.heading}</h2>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary">Convert to Uppercase </button>
      <button className="btn btn-dark ">Remove all text</button>

    </>
    
  )
}
Textform.propTypes = {
    heading: PropTypes.string
}
export default Textform

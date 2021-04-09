import React from "react";
import PropTypes from 'prop-types';

function Title(props) {
 return(
  <>
    <div className="container">
    <h1>
      Explore {props.label} no<br></br>
      Github.
    </h1>
  </div>
  </>
 )
};

Title.propTypes = {
  label: PropTypes.string
}

export default Title;

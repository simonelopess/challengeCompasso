import React from "react";
import PropTypes from "prop-types";

function Title(props) {
  return (
    <>
      <h1 className="h1 mb-4">
        Explore {props.label} no<br></br>
        Github.
      </h1>
    </>
  );
}

Title.propTypes = {
  label: PropTypes.string,
};

export default Title;

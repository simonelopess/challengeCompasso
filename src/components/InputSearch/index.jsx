import React, { useState } from "react";
import PropTypes from "prop-types";

function InputSearch(props) {
  const [userName, setUserName] = useState("");
  return (
    <>
      <form className={props.size}>
        <div className="input-group input-group-lg">
          <input
            type="text"
            className="form-control"
            placeholder={props.placeholder}
            aria-label="Email"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          ></input>
          <span className="input-group-append">
            <button
              className="btn btn-primary"
              type="button"
              onClick={() => (
                props.inputValue(userName), props.onSubmit(userName)
              )}
            >
              {props.labelButton}
            </button>
          </span>
        </div>
      </form>
    </>
  );
}

InputSearch.propTypes = {
  size: PropTypes.string,
  labelButton: PropTypes.string,
  placeholder: PropTypes.string,
  inputValue: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default InputSearch;

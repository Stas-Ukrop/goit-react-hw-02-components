import React from "react";
import PropTypes from "prop-types";
const createButtons = ({ options, setOptions }) => {
  let masButtons = options.map((el, index) => {
    return (
      <button key={index.toString()} type="button" onClick={setOptions[index]}>
        {el}
      </button>
    );
  });
  return <>{masButtons}</>;
};
export default createButtons;
createButtons.propTypes = {
  options: PropTypes.array,
  setOptions: PropTypes.array,
};

import React from "react";
import "./Buttons.css";
import PropTypes from "prop-types";

const Buttons = ({ good, neutral, bad }) => {
  return (
    <>
      <button type="button" onClick={good}>
        good
      </button>
      <button type="button" onClick={neutral}>
        neutral
      </button>
      <button type="button" onClick={bad}>
        bad
      </button>
    </>
  );
};
export default Buttons;
Buttons.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};

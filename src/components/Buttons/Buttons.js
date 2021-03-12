import React from "react";
import "./Buttons.css";
import PropTypes from "prop-types";
import CreateButtons from "./createButtons";

const Buttons = ({ options, setOptions }) => {
  return (
    <>
      <CreateButtons options={options} setOptions={setOptions} />
    </>
  );
};
export default Buttons;
Buttons.propTypes = {
  options: PropTypes.array,
  setOptions: PropTypes.array,
};

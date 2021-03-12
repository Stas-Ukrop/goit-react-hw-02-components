import React from "react";
import PropTypes from "prop-types";

const Filter = ({ filterFunc }) => {
  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          filterFunc(e.target.value);
        }}
      ></input>
    </>
  );
};
export default Filter;

Filter.propTypes = {
  filterFunc: PropTypes.func,
};

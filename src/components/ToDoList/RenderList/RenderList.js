import React from "react";
import "./RenderList.css";
import PropTypes from "prop-types";

const RenderList = ({ list, remoteContact }) => {
  let fullList = list.map(({ id, name, number }) => {
    return (
      <li key={id}>
        <p>{name}:</p>
        <span>{number}</span>
        <button type="button" onClick={() => remoteContact(id)}>
          Удалить
        </button>
      </li>
    );
  });
  return (
    <div>
      <ul>{fullList}</ul>
    </div>
  );
};
export default RenderList;

RenderList.propTypes = {
  list: PropTypes.exact({
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
  }),
  remoteContact: PropTypes.func,
};

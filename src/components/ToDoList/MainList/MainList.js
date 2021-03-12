import React from "react";
import RenderList from "../RenderList";
const MainList = ({ list, remoteContact }) => {
  return (
    <>
      <RenderList list={list} remoteContact={remoteContact} />
    </>
  );
};
export default MainList;

import React, { useState, useContext } from "react";
import theContext from "./theContext";

function ComponentB() {
  const { myFieldValue } = useContext(theContext);
  return <div>Component B value: {myFieldValue}</div>;
}
export default ComponentB;

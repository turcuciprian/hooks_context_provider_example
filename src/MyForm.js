import React, { useState, useContext } from "react";
import theContext from "./theContext";

function MyForm() {
  const [my_value, setMyValue] = useState("");
  const { myFormFieldValue, modifyValue } = useContext(theContext);
  return (
    <div>
      <div>
        <div style={{ fontSize: 14, display: "inline-block" }}>
          Local Value:
        </div>
        <b>{my_value}</b>
      </div>
      <div>
        <div style={{ fontSize: 14, display: "inline-block" }}>
          Store Value:
        </div>
        <b>{myFormFieldValue}</b> <br />
      </div>
      <input
        type="text"
        value={my_value}
        onChange={newValue => {
          setMyValue(newValue.target.value);
          modifyValue(newValue.target.value);
        }}
      />
      <button
        onClick={() => {
          debugger;
          //TO-DO: save to the store
        }}
      >
        Save to Store
      </button>
    </div>
  );
}
export default MyForm;

import React, { useState, useContext } from "react";

function MyForm(props) {
  const [my_value, setMyValue] = useState("");
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
        <b>{props.myFormFieldValue}</b> <br />
      </div>
      <input
        type="text"
        value={my_value}
        onChange={newValue => {
          setMyValue(newValue.target.value);
        }}
      />
      <button
        onClick={() => {
          console.log(props);
          // props.dispatch({
          //   type: "update_value",
          //   newValue: my_value
          // });
          //TO-DO: save to the store
        }}
      >
        Save to Store
      </button>
    </div>
  );
}
export default MyForm;

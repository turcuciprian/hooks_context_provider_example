import React, { createContext, useReducer } from "react";
const initialState = { myFormFieldValue: "" };
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "update_value":
        return {
          ...state,
          myFormFieldValue: action.payload
        };

      default:
        throw Error();
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };

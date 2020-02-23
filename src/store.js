import React, { createContext, useReducer } from "react";
const initialState = { myFormFieldValue: "" };
const store = createContext(initialState);
const { Provider } = store;

const reducer = (state, action) => {
  switch (action.type) {
    case "update_value":
      return {
        ...state,
        myFormFieldValue: action.newValue
      };

    default:
      throw Error();
  }
};

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Provider value={{ state }} dispatch={dispatch}>
      {children}
    </Provider>
  );
};

export { store, StateProvider };

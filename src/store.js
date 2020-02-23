import React, { createContext, useReducer } from "react";
const initialState = {};
const store = React.createContext(initialState);
const { Provider } = store;
const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    //
    switch (action.type) {
      case "update_value":
        const newState = state;
        return newState;
      default:
        throw Error();
    }
  }, initialState);
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };

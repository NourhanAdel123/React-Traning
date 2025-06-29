import React, { useReducer } from "react";

const CounterReducer = () => {
  function reducer(state, action) {
    switch (action.type) {
      case "plus":
        return state + 1;
      case "minus":
        return state - 1;
      case "reset":
        return 0;
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <>
      <button onClick={() => dispatch({ type: "plus" })}>+</button>
      <button onClick={() => dispatch({ type: "minus" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
      {state}
    </>
  );
};

export default CounterReducer;

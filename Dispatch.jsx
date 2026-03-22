import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { inc } from "./store";

function App() {
  const count = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(inc())}>Increment</button>
    </div>
  );
}

export default App;
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => count + 1);
  };

  const decrement = () => {
    setCount((prev) => count - 1);
  };

  const restart = () => {
    setCount(0);
  };

  const changeSigns = () => {
    setCount((prev) => count * -1);
  };
  return (
    <div>
      <p data-testid="counter-value">Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={restart}>Restart</button>
      <button onClick={changeSigns}>Change Sign</button>
    </div>
  );
};

export default Counter;

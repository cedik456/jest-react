// src/components/Counter.js
import React, { useState } from "react";

const Counter = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p data-testid="count">{count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;

import React, {useState} from "react";
import "./counter.css";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <button onClick={() => setCount((currentCount) => currentCount + 1)}>+</button>
      <button onClick={() => setCount(0)}>reset</button>
      <button onClick={() => setCount((currentCount) => currentCount - 1)}>-</button>

      <h1> My Count: {count} </h1>
    </div>
  );
}

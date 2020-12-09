import React, {useState, useEffect} from "react";
import randomColor from "randomcolor";
import "./counter.css";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("");

  useEffect(() => setColor(randomColor()), [count]);

  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => prevCount - 1);
  const reset = () => setCount(0);

  return (
    <div className="counter">
      <h1 style={{color: color}}> {count} </h1>

      <button onClick={increment}>+</button>
      <button onClick={reset}>reset</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

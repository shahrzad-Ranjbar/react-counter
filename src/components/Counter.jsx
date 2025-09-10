import React, { useState } from "react";
import "./../assets/css/Counter.css";
export default function Counter() {
  const [counter, setCounter] = useState(0);

  function handleClick() {
    setCounter(counter + 1);
  }

  return (
    <div className="counter-container">
      <h1 className="counter-title">
        Shahrzad Ranjbar
        <br /> Counter Value: {counter}
      </h1>
      <button className="counter-button" onClick={handleClick}>
        Click to Update
      </button>
    </div>
  );
}

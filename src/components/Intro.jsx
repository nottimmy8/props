import React, { useState } from "react";
import "../index.css";

export const Intro = ({ name, intro }) => {
  const fruits = ["Apple", "Banana", "Orange", "Grapes", "Mango"];

  const [hide, setHide] = useState(false);

  const hideclick = () => {
    setHide(true);
    console.log(hide);
  };
  return (
    <div>
      <h1> {name} </h1>
      <p>{intro}</p>

      {fruits.map((fruit) => (
        <h1>{fruit}</h1>
      ))}

      <button onMouseEnter={hideclick} onMouseLeave={() => setHide(false)}>
        Click Me
      </button>
      <button>Click Me</button>
      <div>
        <h1 className={hide ? "hide" : "show"}>Hello i'm on</h1>
      </div>
    </div>
  );
};

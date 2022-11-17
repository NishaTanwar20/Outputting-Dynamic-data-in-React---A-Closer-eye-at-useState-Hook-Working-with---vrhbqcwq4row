import React, { useState, useEffect, useRef } from "react";
import "../styles/App.css";
const App = () => {
  //code here
  // const [name , setName] = useState("");
  const name = useRef("");
  const [finalName, setFinalName] = useState("");

  const handleInput = (e) => {
    name.current = e.target.value;
    // setName(e.target.value);
  };
  const handleClick = () => {
    setFinalName(name.current);
    // setFinalName(name);
  };

  return (
    <div id="main">
      <input id="input" ref={name} onChange={handleInput}></input>
      {/* <input id="input" value={finalName} onChange={handleInput}></input> */}
      <button id="button" onClick={handleClick}>
        Click
      </button>
      <p id="text">
        Hello my name is {finalName || "_______"} and I study at Newton School
        {/* Hello my name is {finalName} and I study at Newton School */}
      </p>
    </div>
  );
};

export default App;

import React, { useState, useEffect ,useRef} from "react";
import "../styles/App.css";
const App = () => {
  //code here
  const name = useRef("");
  const [finalName, setFinalName] = useState("________");

  const handleInput = (e) => {
    name.current = e.target.value;
  };
  const handleClick = () => {
    setFinalName(name.current);
  };

  return (
    <div id="main">
      <input id="input" ref={name} onChange={handleInput}></input>
      <button id="button" onClick={handleClick}>
        Click
      </button>
      <p id="text">
        Hello my name is {finalName} and I study at Newton School
      </p>
    </div>
  );
};

export default App;

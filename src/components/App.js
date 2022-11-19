import React, { useState, useEffect ,useRef} from "react";
import "../styles/App.css";
const App = () => {

  // const name = useRef("");
  const [name , setName] = useState("");
  const [finalName, setFinalName] = useState("________");
 
  const handleInput = (e) => {
    // name.current = e.target.value;
    setName(e.target.value);
  };
  const handleClick = () => {
    // setFinalName(name.current);
    setFinalName(name);
  }; 


return (
    <div id="main">
      <input id="input" name={name} onChange={handleInput}></input>
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

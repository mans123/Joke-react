import React from "react";

function Joke(props) {
  return (
    <div className="joke">
      <h3 style={{ display: !props.question && "none" }}>{props.question}</h3>
      <h3 style={{ color: !props.question && "#888888" }}>
        Answer: {props.punchLine}
      </h3>
    </div>
  );
}

export default Joke;

/*
Set display in two ways * Second one is really important because this is uses alot in react
  display: props.qustion ? "block" : "none"
  display: !props.qustion && "none"
*/

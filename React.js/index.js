//jshint esversion: 6
// this is old way of doing it
// const React = require("react");
// const ReactDOM = require("react-dom");

// we can also do it this way
import React from "react";
import ReactDOM from "react-dom";

// eg.1
 ReactDOM.render(<h1>Hello!!</h1>, document.getElementById("root"));

//  we can only specify on single HTML element inside render method
//  so to use multiple element we put them inside div
// eg.2
ReactDOM.render(
  <div>
    <h1>Hello!!</h1>
    <p>This is a paragraph</p>
  </div>,
  document.getElementById("root")
);

// eg.3
ReactDOM.render(
  <div>
    <h1>My Favourite Foods</h1>
    <ul>
      <li>Pasta</li>
      <li>Pizza</li>
      <li>Soya Chaap</li>
    </ul>
  </div>,
  document.getElementById("root")
);

// eg.4
// We insert HTML inside JS now we insert JS inside that HTML like This

var name="Swapnil";
ReactDOM.render(<h1>Hello!! {name}</h1>, document.getElementById("root"));
// we can also write some maths
ReactDOM.render(<h1>Hello!! sum is {5+7}</h1>, document.getElementById("root"));
// In short we can inject any JavaScript "expression" inside that curly braces
//  but we can't write any statement like if,else,while,loops

// eg.5
//  to add styling in the react file with the help of CSS we can add class like our JS
ReactDOM.render(
  <div>
    <h1 className="head">   My Favourite Foods  </h1>
    </div>,
  document.getElementById("root")
);

// eg.6
// to add images
var img = "https://picsum.photos/200";
ReactDOM.render(
  <div>
    <h1 className="head" contentEditable="true" spellCheck="true">
      My Favourite Foods
    </h1>
    <img src={img + "?grayscale"} /> //grayscale for B/W photos
  </div>,
  document.getElementById("root")
);

// eg.7
// to inject inline class
ReactDOM.render(<h1 style={{color:"red"}}>Hello World!</h1>,
document.getElementById("root")); //outer curly braces to define that we specify JS inside
// bcoz if we want to give any JS value inside HTML then we have give interval
// as JS object and JS object define as { property: "value"}

var customStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black"
};

ReactDOM.render(
  <h1 style={customStyle}>Hello World!</h1>,
  document.getElementById("root")
);  // we can also do this

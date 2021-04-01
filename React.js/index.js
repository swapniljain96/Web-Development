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

// how to make our code MODULAR
function Heading() {
  return <h1>My Favourite Foods</h1>;
}

ReactDOM.render(
  <div>
    <Heading />  //this is self closing tag so we can use this convention
    <ul>
      <li>Bacon</li>
      <li>Jamon</li>
      <li>Noodles</li>
    </ul>
  </div>,
  document.getElementById("root")
);

// we can create the different file like "Heading.jsx" to separate our code from the
// main page and can reuse anywhere, code be like this:
import React from "react";

function Heading() {
  return <h1>My Favourite Foods</h1>;
}

export default Heading;  //export default means any file can access that file

// here we are using React custom made attribute called props 
// this is passing the arguments to the functions
function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar_img" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}
ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tel="+123 456 789"
      email="b@beyonce.com"
    />
    <Card
      name="Jack Bauer"
      img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
      tel="+987 654 321"
      email="jack@nowhere.com"
    />
  </div>,
  document.getElementById("root")
);

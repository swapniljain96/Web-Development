
// variable syntax
// var <keyword/variable> = <value>
//Length of word
var name="swapnil";
name.length; //it will give the length of the string. (here 7)


// Slicing
var name="swapnil";
name.slice(0,4); //total characters = (upper bound-lower bound)=4-0=4

//changing to UpperCase
var name="Swapnil";
name.toUpperCase(); //SWAPNIL
name.toLowerCase(); //swapnil

//selectively capitalize the fisrt letter for naming
var name=prompt("Enter name:");
var fi=name.slice(0,1).toUpperCase();
var ls=name.slice(1,).toLowerCase();
alert("Hello "+fi+ls);

// NUMBERS
var a=5
var b=6
var c=a+b

//FUNCTIONS
// Function syntax
// function <function-name> (<formal parameter>) { function definiton  return <any-output you want>;}  function create
// <function-name>(<actual parameter>);  function call

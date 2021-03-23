
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
//  <function-name>(<actual parameter>);  function call

// to generate random number
var n=Math.random();// it generate 16 decimal places no. bt 0-.9999999999999999

// to get between range then multiply with that Number
// ex. you want number bt 0-7 then multiply it with 7 like Math.random();

// Here we use === 3equals to check the equality and !== for unequal
differnce == it only checks for equality not datatype
          === it only checks for equality and datatype both
Arrays
var myarr=[1,2,3,4,5];

// to find that element is in that array or not we use include
myarr.includes(2,0);
// to add element in the array
myarr.push(6);
// to remove element in the array
myarr.pop();

// LOOPS
while(condition){
  // do something
}
for(initialize;condition;updation){
  // do something
}

// DOM(Document Object Model)
//  we can get our elements by many Ways
  1. document.getElementById("head");
  2. document.getElementsByClassName();
  3. document.getElementsByTagName();
  4. document.querySelector();
  // in point 4 we can select this like we use in our css file ex. h1 for html tag document.querySelector(h1);
  // .<classname> for class  document.querySelector(.btn);
  //  #<id> for id  document.querySelector(#head);
  // we can combine our selectors and query something that is quite specific like ("li  a")

  // to add a class of the object on the go
  document.querySelector("button").classList;  // this give us all the class that is attached to button tag

  document.querySelector("button").classList.add("abc"); //this is use to add class for a tag on the go
  document.querySelector("button").classList.remove("abc"); //this is use to remove class for a tag on the go
  document.querySelector("button").classList.toggle("abc"); //if class added then remove vice-versa   for a tag on the go

  document.querySelector("h1").innerHTML; //this give all the HTML that is inside the h1 tag

  document.querySelector("h1").textContent;//this  give us the only text that is inside the h1 tag

// to change the ATTRIBUTE
  document.querySelector("a").attributes; // we get all the attributes of anchor tag

  document.querySelector("a").getAttribute("href"); // we get only specific attribute of the anchor tag

  document.querySelector("a").setAttribute("href","what we want to change"); // if we want to change specific attribute of the anchor tag

// JScript OBJECT

   var ObjectName={
     property-name1: value,
     property-name2: value,
     property-name3: value,
     property-name4: value,
     property-name5: value
   }

// Constructor function for to create objects
 function ObjectName(property-name1,property-name2,property-name3,..)
 { this.property-name1: value,
   this.property-name2: value,
   this.property-name3: value,
   .
   .
 }
// initialize OBJECT

var Object1= new ObjectName(property-name1,property-name2,property-name3,..)

ex.
function housekeeper(yearOfEx,name,cleaningRepo){
  this.yearOfEx=yearOfEx,
  this.name=name,
  this.cleaningRepo=cleaningRepo
}

 var housekeeper1= new housekeeper(12,"Ram",["Bedroom","lobby"]);

 // METHODS
 fucntion cleanHere(){
   alert("I am cleaning here");
 }


// we can also add the methods in our objects also like this
function housekeeper(yearOfEx,name,cleaningRepo){
  this.yearOfEx=yearOfEx,
  this.name=name,
  this.cleaningRepo=cleaningRepo
  this.clean  = fucntion(){
    alert("I am cleaning here");
  }
}


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

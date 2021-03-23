// High Order fucntions are those functions that can take other functions as inputs.

function add(x,y){
    return x+y;
}
function subtract(x,y){
    return x-y;
}
function multiply(x,y){
    return x*y;
}
function divide(x,y){
    return x/y;
}
 // operator is callback function
function calculator(x,y,operator){
  return operator(x,y);
}


// console.log(calculator(5,2,add));
// console.log(calculator(5,2,subtract));
// console.log(calculator(5,2,multiply));
// console.log(calculator(5,2,divide));

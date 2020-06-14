// It is all about functions!
console.log(typeof Object) 

class Product {}
console.log(typeof Product)


// Function examples
// =================

// Procedure - function without return
function printSum(arg1, arg2){ 
  console.log(arg1 + arg2)
}

printSum(2, 6)
printSum(2)  			// 2 + undefined, NaN
printSum(2, 6, 12, 36) 	// 8
printSum()				// NaN


function sum(a, b = 0){
  return a + b
}
console.log(sum(2, 3))
console.log(sum(2))


// Storing functions into vars
const printSum2 = function (a, b){
  return a + b
}
console.log(printSum2(2, 4))


// Arrow functions into vars
const sum2 = (a, b) => {
  return a + b
}
console.log(sum2(5, 6))


// Implicit return - one line functions
const subtract = (a, b) => a - b
console.log(subtract(3, 2))

const printAgain = arg => console.log(arg)
printAgain("Cool style!!!")


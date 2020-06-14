// Hoisting behavior of the var use

console.log('Var value: ', example)
var example = 2
console.log('Var value: ', example)

// The code above means the code below
var example
console.log('Var value: ', example)
example = 2
console.log('Var value: ', example)

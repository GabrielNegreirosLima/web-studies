console.log(sum(3, 4))
// console.log(sub(3, 4)) Doesn't run because the sub isn't declared yet


// Function declaration (global context) 
function sum(x, y) {
	return x + y
}

// Function expression
const sub = function (x, y) {
	return x - y
}

// Named function expression
const mult = function mult (x, y) {
	return x * y
}


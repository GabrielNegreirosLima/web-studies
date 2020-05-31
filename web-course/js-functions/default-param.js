// How to 1)
function sum1(a, b, c){
	a = a || 1
	b = b || 1
	c = c || 1
	return a + b + c
}

console.log("First example")
console.log(sum1())
console.log(sum1(3))
console.log(sum1(1, 2))
console.log(sum1(0, 0, 0)) // but 0 is evaluated as false, so returns 3


// 3 different ways
function sum2(a, b, c){
	a = a != undefined  ? a : 1
	b = 1 in arguments  ? b : 1
	c = isNaN(c) 		? 1 : c
	
	return a + b + c 
}

console.log("Second example")
console.log(sum2())
console.log(sum2(3))
console.log(sum2(3, 5))
console.log(sum2(0, 0, 0)) // here the sum goes correctly


// Default parameter - ES2015
function sum3(a = 1, b = 2, c = 3) {
	return a + b + c
}

console.log("Third example")
console.log(sum3())
console.log(sum3(1, 2))
console.log(sum3(0, 0, 0))

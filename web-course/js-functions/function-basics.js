// Literal form
function first() {}  

// Variable-stored function
const second = function () {}

// Array-stored function
const third = [
	function (a, b) { return a + b },
	first,
	second,
]
console.log(third[0](6, 8))

// Object-stored function
const object = { }
object.talk  = function () { return 'Hi!' }
console.log(object.talk())

// Functions as parameters
function run(fun) {
	fun()
}
run(function () { console.log('say hello inside of run!')})

// Functions may return or have a inside function
function printSum(a, b){
	return function (c) {
		console.log(a + b + c)
	}
}

// printSum(2, 3)(4)
const fivePlus = printSum(2, 3)
fivePlus(4)


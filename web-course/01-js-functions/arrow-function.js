let double = function (a) {
	return 2 * a
}

double = (a) => {
	return 2 * a
}

double = a => 2 * a
console.log(double(Math.PI))


let hello = function () { 
	return 'Hello'
}

hello = () => 'Hello'

hello = _  => 'Hello' 	// it HAS 1 parameter, but can be ignored

console.log(hello())


// Using arrow functions to set the binding for the lexical context
function Person() {
	this.idade = 0

	setInterval(() => {
		this.idade++
		console.log(this.idade)
	}, 1000)
}
// new Person 


// Using bind function
let compareToThis = function (param){
	console.log(this === param)
}

compareToThis(global)

const someObject = {}
compareToThis = compareToThis.bind(someObject)
compareToThis(global)
compareToThis(someObject)

let compareToThisArrow = param => console.log(this === param)
compareToThisArrow(global)
compareToThisArrow(module.exports)


// Between bind and arrow functions, the arrow function keeps 
// the `this` reference to the lexical context that function was written
compareToThisArrow = compareToThisArrow.bind(someObject)
compareToThisArrow(someObject)
compareToThisArrow(module.exports)

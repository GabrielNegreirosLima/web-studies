// Variables - let and const
// let has block scope
console.log("\n --- Variables")
{
	var a = 3
	let b = 2 
}
console.log(a)
// console.log(b)



// Template String - evaluate tabs, line breaks, eval variables and expressions
console.log("\n --- Template String")
const productPrice = 190.9
console.log(`Price: ${productPrice + 10} 
				is 
	inflated!!`)


// Destructuring 
console.log("\n --- Destructuring")

// with rest operator
const [l, e, ...tters] = "Some string"
console.log(l, e, tters)

const [x, , y] = [1, 3, 6]
console.log(x, y)

const {age, name: noum }  = { name: 'Ana', age: 22}
console.log(age, noum)



// Arrow Function
console.log("\n --- Arrow Functions")
const sum = (a, b) => a + b
console.log(sum(2,4))

// Arrow functions have lexical context
const lexical = () => console.log(this === exports)
const naughtyTry = lexical.bind({}) 	// it doesn't work!

lexical()
naughtyTry()



// Default param
console.log("\n --- Default Param")
function log(text = 'Node') {
	console.log(text)
}
log("Hey!")
log()



// Rest operator
console.log("\n --- Rest operator")
function total(...numbers){
	let total = 0
	numbers.forEach( n => total += n)
	return total
}
console.log(total(1,2,3,4,5,6,7,8,9,10))



// ES8: Object.values/Object.entries
console.log("\n --- Object.values and Object.entries")
const obj = { a: 1, b: 2, c: 3 }
console.log(Object.values(obj))
console.log(Object.entries(obj))



// Literal object improvement 
// - no need for key: key
// - no need for label functions
const name = 'Ana'
const person = {
	name,
	hello() {
		return 'Hello guys!'
	}
}



// Classes - but it's just functions
console.log("\n --- Classes")
class Animal {}
class Dog extends Animal {	// heritance with prototypes!
	speak() {
		return "Auf auf"
	}	
}
console.log(new Dog().speak())

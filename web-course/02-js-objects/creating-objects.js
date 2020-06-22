// Literal
const obj1 = {}

// Object
console.log(typeof Object, typeof new Object)
const obj2 = new Object

// Constructors
// name is "public", price and discount are hidden
function Product(name, price, discount){	
	this.name = name
	
	this.getPriceWithDiscount = () => {
		return price * (1 - discount)
	}
}

const firstProduct = new Product('Pen', 7.99, 0.15)
const secondProduct = new Product('Notebook', 2999.99, 0.20)
console.log(firstProduct, secondProduct)

// Object.create
// returns a object with a specified prototype or a null prototype
const person = Object.create(null)
person.name = 'Ana'
console.log(person.name)


// Example from functions that return objects
const fromJSON = JSON.parse('{"info": "I\'m a JSON!"}')
console.log(fromJSON.info)


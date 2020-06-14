// Simple factory - always return an object
function createPerson () {
	return {
		name: 'Gabriel',
		lastname: 'Negreiros'
	}
}

console.log(createPerson())

// My try
function createProduct (name, price) {
	const discount = 0.05;
	
	return {
		name: name,
		price: price - ( price * discount)
	}
}

// By the teacher
function createProduct2(name, price){
	return {
		name,
		price,
		discount: 0.05
	}
}

console.log(createProduct('Bag', 20))
console.log(createProduct2('Notebook', 2199.49))

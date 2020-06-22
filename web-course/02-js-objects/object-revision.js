// Key-Value Pair dynamic collection

const product = new Object
product.name = 'Cadeira'
product['brand'] = 'Generic'
product.price = 520

console.log(product)
delete product.price
delete product['brand']
console.log(product)


const car = {
	model: 'A4',
	price: 89000,
	owner: {
		name: 'Gabriel',
		age: 22,
		address: {
			street: 'Av Amazonas',
			number: 123
		}
	},
	drivers: [{
		name: 'Junior',
		age: 22
	}, {
		name: 'Ana',
		age: 24
	}],

	carInsuranceValue(){
		// ...
	}
}

car.owner.address.number: 1000
car.['owner']['address']['street'] = 'Av Giant'
console.log(car)

delete car.drivers
delete car.owner.address
delete car.carInsuranceValue
console.log(car)
console.log(car.drivers)		// there's no error, 'cause car is defined
console.log(car.drivers.length)	// there's an error, 'cause drivers is undefined


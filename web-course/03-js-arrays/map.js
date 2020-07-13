// Mapping a array to other array
const numbers = [1, 2, 3, 4, 5]

// If a return is not defined, map will return undefined items to the new array
let newNumbers = numbers.map(function(e){
	return e * 2
})
console.log(newNumbers)

const sum10 = value => value + 10
const triple = value => value * 3
const toMoney = value => `R$ ${parseFloat(value).toFixed(2).replace('.', ',')}`

const result = numbers
				.map(sum10)
				.map(triple)
				.map(toMoney)

console.log(result)


Array.prototype.myMap = function(callback){
	let newArray = []

	for(let i=0; i < this.length; i++){
		newArray.push( callback(this[i], i, this) )
	}

	return newArray
}

const cart = [
	'{ "name": "Eraser", "price": 3.45}',
	'{ "name": "Notebook", "price": 5.30}',
	'{ "name": "Pencils", "price": 35.00}',
	'{ "name": "Pen", "price": 10.90}'
]

const prices = cart
				.map(value => JSON.parse(value))
				.map(value => value.price)
				.map(toMoney)
console.log(prices, cart)

const pricesAgain = cart
					.myMap(value => JSON.parse(value))
					.myMap(value => value.price)
					.myMap(toMoney)
console.log(pricesAgain)


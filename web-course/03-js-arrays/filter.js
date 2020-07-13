Array.prototype.myFilter = function(callback){
	let newArray = []
	
	for(let i=0; i < this.length; i++){
		if(callback(this[i], i, this))
			newArray.push(this[i])
	}
	
	return newArray
}

const products = [
	{ name: 'Laptop Computer', price: 2500, fragile: true },
	{ name: 'iPad Pro', price: 6000, fragile: true },
	{ name: 'Glass', price: 18.9, fragile: true },
	{ name: 'Plastic cup', price: 5.9, fragile: false },
]

console.log(products.filter(function(value) {
	return !value.fragile
}))

console.log(products.filter(function(value) {
	return value.price > 2000
}))

console.log(products.myFilter(function(value) {
	return value.price > 2000
}))


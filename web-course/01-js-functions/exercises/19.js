function getFinalPrice(id, quantity){
	
	switch(id){
		case 100:
			return 3.0 * quantity
		case 200:
			return 4.0 * quantity
		case 300:
			return 5.5 * quantity
		case 400:
			return 7.5 * quantity
		case 500:
			return 3.5 * quantity
		case 600:
			return 2.8 * quantity
		default:
			return null
	}
}

console.log(getFinalPrice(100, 75))
console.log(getFinalPrice(300, 75))
console.log(getFinalPrice(400, 75))
console.log(getFinalPrice(200, 75))
console.log(getFinalPrice(600, 75))

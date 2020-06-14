function currency(number){
	const integer = Math.round(number)

	// Get decimal part as an Integer
	const decimal = Number((number - integer).toFixed(2)) * 100 
	
	return `R$${integer},${decimal}`
}


console.log(currency(0.30000000000000004))

function multiplyVectorBy(array, number){
	
	let multiplied = []
	
	array.forEach( value => multiplied.push(value * number))
	return multiplied
}

function multiplyIfGreaterThan5(array, number){
	if(number <= 5)
		return array

	return multiplyVectorBy(array, number)
}

console.log(multiplyIfGreaterThan5([1, 2, 3, 5], 6))

function triangleType(a, b, c) {
	
	if( a === b && b === c)
		return 'Equilatero'
	if( a === b || a === c || b == c)
		return 'Isosceles'
	
	return 'Escaleno'
}

console.log(triangleType(1, 3, 2))

function bhaskara(a, b, c){
	const delta = b**2 - 4*a*c
	
	if (delta < 0)
		return "Negative Delta"

	const root1 = (b - Math.sqrt(delta))/(2 * a)
	const root2 = (b + Math.sqrt(delta))/(2 * a)

	return [root1, root2]
}

console.log(bhaskara(2, 3, 1))

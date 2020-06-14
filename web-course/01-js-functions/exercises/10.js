function isDivisibleBy3(number){
	if (number < 3)
		return false
	if (number % 3 == 0)
		return true
	
	return false
}

console.log(isDivisibleBy3(3))
console.log(isDivisibleBy3(2))
console.log(isDivisibleBy3(6))
console.log(isDivisibleBy3(9))
console.log(isDivisibleBy3(8))
console.log(isDivisibleBy3(1))
console.log(isDivisibleBy3(0))

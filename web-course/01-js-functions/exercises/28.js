function evenAndOdd(numbers){
	let evens = 0
	let odds  = 0

	for(number of numbers){
		if(number % 2 == 0)
			evens++
		else
			odds++
	}

	console.log(`There is ${evens} even numbers and ${odds} odd numbers`)
}

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
 
evenAndOdd(numbers)

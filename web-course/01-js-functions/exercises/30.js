function getBiggestAndSmallest( numbers ){
	let biggest = numbers[0]	
	let smallest = numbers[0]	
	
	for(let i = 1; i < numbers.length; i++){
		if( biggest < numbers[i] )
			biggest = numbers[i]
		else if(smallest > numbers[i])
			smallest = numbers[i]
	}
	
	return [biggest, smallest]
}

let edges = getBiggestAndSmallest( [10, 5, 7, 3, 1, 3, 11, 20, 6, 9] )
console.log(`The biggest number is ${edges[0]} and the smallest is ${edges[1]}`)

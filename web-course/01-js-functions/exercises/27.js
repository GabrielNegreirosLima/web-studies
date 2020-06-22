function yearsUntilOvertake(heights, growthRates, smaller){
	let years = 0
	let taller = 0
	
	if(smaller == 0)
		taller = 1	

	while( heights[smaller] <= heights[taller] ){
		heights[smaller] +=  growthRates[smaller]
		heights[taller] += growthRates[taller]
		years++
	}
	
	return years
}

function compareKidsHeight ( heights, growthRates ){
	let years = 0

	if(heights[0] < heights[1]){
		console.log(`There is a smaller kid, and it's the first`)

		if( growthRates[0] < growthRates[1] ){
			console.log(`And he/she won't be ever taller than the other`)
			return
		}
	
		years = yearsUntilOvertake(heights, growthRates, 0)

		console.log(`The first will be taller than the second in ${years} year(s)`)
		return
	}
	
	console.log(`There is a smaller kid, and it's the second`)
	
	if( growthRates[1] < growthRates[0] ){
		console.log(`And he/she won't be ever taller than the other`)
		return
	}

	years = yearsUntilOvertake(heights, growthRates, 1)
	console.log(`The second will be taller than the first in ${years} year(s)`)
	return
}

compareKidsHeight([150, 130], [2, 4])

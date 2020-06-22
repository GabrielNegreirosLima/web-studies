function between10and20(numbers){
	let isIn = 0 
	let isOut= 0

	for(let i = 0; i < numbers.length; i++){
		if( numbers[i] >= 10 && numbers[i] <= 20 )
			isIn++
		else
			isOut++
	}

	console.log(`${isIn} numbers between 10 and 20,`+
				`and ${isOut} numbers outside this range \
				`)
}

between10and20([7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21])

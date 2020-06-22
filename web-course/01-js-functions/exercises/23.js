function evaluateStudent(id, notes) { 
	const max = Math.max( ...notes )
	const lightWeight = 3
	const heavyWeight = 4
	const minAvg = 5
	let sum = 0

	console.log(`The student ${id} got the following grades in the tests: `)

	for( note of notes ){

		if( note == max ){
			console.log(`${note}, her/his best grade!`)
			sum += note * heavyWeight
			continue
		}

		console.log(`${note}`)
		sum += note * lightWeight
	}
	
	// Question weight
	const avg = sum / (( notes.length-1 ) * lightWeight + heavyWeight) 

	console.log(`His average is: ${avg}`)

	if(avg >= minAvg)
		return `Approved`

	return  `Reproved`
}

console.log(evaluateStudent(999, [5, 5, 4.5]))

function recordPointsAndWorstGame(pointsList){
	let records = 0
	let actualRecord = 0
	let worstPoints = 999
	let worstIndex	= 0

	pointsList.split(", ").forEach(
	function (value, i){
		if(value > actualRecord){
			actualrecord = value
			records++
		}

		if(value < worstPoints)
			worstIndex = i
	})
	
	return [records, worstIndex]
}

let pointsList = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0"
console.log(recordPointsAndWorstGame(pointsList))

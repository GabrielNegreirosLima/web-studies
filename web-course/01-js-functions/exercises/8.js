function recordPointsAndWorstGame(pointsList){
	const points 	 = pointsList.split(" ")
	let records 	 = 0
	let actualRecord = points[0]
	let worstPoint 	 = points[0] 
	let worstIndex	 = 0

	for(let i=0; i<points.length; i++){
		if(Number(points[i]) > actualRecord){
			actualRecord = points[i]
			records++
		}
		else if(Number(points[i]) < worstPoint){
			worstPoint = points[i]
			worstIndex = i
		}
		
	}

	// Game number = index + 1
	return [records, worstIndex+1]
}

let pointsList = "10 20 20 8 25 3 0 30 1"
console.log(recordPointsAndWorstGame(pointsList))

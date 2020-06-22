function exchangeVectorValues(array1, array2){

	if(array1.length != array2.length)
		return null

	for(i in array1){
		[array2[i], array1[i]] = [array1[i], array2[i]]
	}
	
	return true
}

let vector1 = [1, 2, 3, 4]
let vector2 = [2, 3, 3, 2]

console.log(vector1, vector2)
exchangeVectorValues(vector1, vector2)
console.log(vector1, vector2)

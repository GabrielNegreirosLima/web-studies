function containAllChars(first, second) {
	let found = false
	let i, j = 0
	first = first.toLowerCase()
	second = second.toLowerCase()
	
	if(first.length < second.length)
		[first, second] = [second, first]
	
	for(let i=0; i < first.length; i++){
		found = false

		while(j < second.length && found == false){
			if (first[i] === second[j])
				found = true
			j++
		}
		j = 0

		if(found == false)
			return false
	}

	return true
}

console.log(containAllChars('abaca', 'abacaaabacacabababaca'))

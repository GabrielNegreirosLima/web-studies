function evaluateStudent(note){
	
	if (note > 100 || note < 0)
		return 'Bad note'
	
	if (note < 38)
		return 'Student reproved'

	return roundNote(note)
}

function roundNote(note){

	// If the note is 3 points from the next 5 multiple
	if (note % 5 > 2)
		note += 5 - (note % 5)
	
	return note
}

console.log(evaluateFinalNote(100))
console.log(evaluateFinalNote(30))
console.log(evaluateFinalNote(38))
console.log(evaluateFinalNote(88))
console.log(evaluateFinalNote(61))

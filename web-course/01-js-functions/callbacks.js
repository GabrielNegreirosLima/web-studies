const brands = ["Mercedes", "Audi", "BMW"]

function printing(name, index){
	console.log(`${index}. ${name}`)
}

brands.forEach(printing)
brands.forEach(brand =>	console.log(brand))


const notes = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Without callbacks
let lowNotes = []
for (let i in notes) {
	if (notes[i] < 7.0) {
		lowNotes.push(notes[i])
	}
}

console.log(lowNotes)

/* With callbacks
 * const notesBelow7 = note < 7.0
 * lowNotes = notes.filter(notesBelow7)
 */
lowNotes = notes.filter(function (note) {
	return note < 7.0
})

console.log(lowNotes)



// Inside browser callback
document.getElementsByTagName('body')[0].onclick = function (e) {
	console.log('Event occured')
}

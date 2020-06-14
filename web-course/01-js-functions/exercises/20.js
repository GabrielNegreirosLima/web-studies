const currencyNotes = [100, 50, 10, 5, 1]

function retrieveBankNotes(value) {
	let notesCounter = []
	
	for(let i=0; i < currencyNotes.length; i++){
		if(value >= currencyNotes[i]){
			notesCounter[i] = Math.floor(value / currencyNotes[i])
			value = value - notesCounter[i] * currencyNotes[i]
		}
	}
	return notesCounter
}

function printBankNotes(value){
	let bankNotes = retrieveBankNotes(value)

	bankNotes.forEach( (value, index) => {
		console.log(`
			${value} nota(s) de R$${currencyNotes[index]}
		`)
	})
}

printBankNotes(278)

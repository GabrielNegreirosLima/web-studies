console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)

function logThis(){
	console.log('Inside a function...')
	console.log(this === exports)
	console.log(this === module.exports)
    console.log(this === global)

	// It will bind danger variable to global scope :scream:
	this.danger = '...'
}

logThis()
console.log(global.danger)

const value = 'Global'

// This function has this node module (lexical-context.js file) as its lexical context
function myFunction() {
	console.log(value)
}

function exec(){
	const value = 'Local'
	myFunction()
}

exec()

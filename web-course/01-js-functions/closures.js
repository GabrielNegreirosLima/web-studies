// Closure is the created scope when a function is declared
// This scope allows the function to access and work with external variables,
// ouside the function

const x = 'Global'

function outside(){
	const x = 'Local'

	function inside(){
		return x
	}

	return inside
}

const myFunction = outside()
console.log(myFunction())

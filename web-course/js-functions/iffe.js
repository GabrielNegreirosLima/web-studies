// IIFE -> Immediately Invoked Function Expressaion 
// Can help to `run away` from the global scope

(function() {
	
	// Not available in global scope
	var someVar = 'Variable'

	console.log('Immediately Invoked!')
})()

console.log(someVar)

// Using var outside of functions, the var has global scope
{
	{
		{	
			var example = 'am I visible?'
		}
	}
}
console.log(example) 

// Using let we can run of the global scope of using var
var number = 1	// Or let...
{
	let number = 2
	console.log("Inside: ", number)
}
console.log("Outside: ", number)

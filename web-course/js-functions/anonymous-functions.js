const sum = function (x, y) {
	return x + y
}

const printResult = function (a, b, operation = sum){
	console.log(operation(a, b))
}
printResult(5, 6)
printResult(5, 6, sum)
printResult(5, 6, function (x, y) {
	return x - y
})
printResult(5, 6, (x, y) => x * y)


const person = {
	// or speaking() {
	speaking: function () {
		console.log("Hey!")
	}
}

person.speaking()

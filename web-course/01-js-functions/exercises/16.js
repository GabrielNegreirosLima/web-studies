function calculator(number1, operation, number2){
	
	switch(operation){
		case '+':
			return number1 + number2
		case '-':
			return number1 - number2
		case '/':
			return number1 / number2
		case '*':
			return number1 * number2
		default:
			return null
	}
}

console.log(calculator(2, '+', 3));
console.log(calculator(2, '-', 3));
console.log(calculator(2, '*', 3));
console.log(calculator(2, '/', 3));
console.log(calculator(2, 'a', 3));

function salaryIncrease(plan, salary){
	switch(plan){
		case 'A':
			return salary * 1.1
		case 'B':
			return salary * 1.15
		case 'C':
			return salary * 1.2
		default:
			return null
	}
}

console.log(salaryIncrease('A', 1000));
console.log(salaryIncrease('B', 1000));
console.log(salaryIncrease('C', 1000));
console.log(salaryIncrease('D', 1000));

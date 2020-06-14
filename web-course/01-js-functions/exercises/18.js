function numberFullForm(number) {
	switch(number){
		case 0:
			return 'Zero'
		case 1:
			return 'One'
		case 2:
			return 'Two'
		case 3:
			return 'Three'
		case 4:
			return 'Four'
		case 5:
			return 'Five'
		case 6:
			return 'Six'
		case 7:
			return 'Seven'
		case 8:
			return 'Eight'
		case 9:
			return 'Nine'
		case 10: 
			return 'Ten'
		default:
			return 'Out of range number'
	}
} 

console.log(numberFullForm(0))
console.log(numberFullForm(1))
console.log(numberFullForm(2))
console.log(numberFullForm(3))
console.log(numberFullForm(4))
console.log(numberFullForm(5))
console.log(numberFullForm(6))
console.log(numberFullForm(7))
console.log(numberFullForm(8))
console.log(numberFullForm(9))
console.log(numberFullForm(10))
console.log(numberFullForm(11))

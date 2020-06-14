function isWorkDay(weekDay) {
	switch (weekDay){
		case 1:
			return false
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
			return true
		case 7:
			return false
		default:
			return null
	}
}

console.log(isWorkDay(1));
console.log(isWorkDay(2));
console.log(isWorkDay(3));
console.log(isWorkDay(4));
console.log(isWorkDay(5));
console.log(isWorkDay(6));
console.log(isWorkDay(7));
console.log(isWorkDay('a'));

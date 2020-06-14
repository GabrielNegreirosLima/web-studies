function fruitPicker(fruit){
	switch(fruit){
		case "apple":
			return "We don't sell this fruit here"
		case "kiwi":
			return "We run out of kiwis"
		case "watermelon":
			return "Here is, R$3/Kg"
		default:
			return "Error"
	}
}

console.log(fruitPicker('apple'))
console.log(fruitPicker('kiwi'))
console.log(fruitPicker('watermelon'))
console.log(fruitPicker('banana'))
console.log(fruitPicker('meloon'))

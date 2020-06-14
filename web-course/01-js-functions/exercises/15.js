function carPicker(type){
	switch(type){
		case 'hatch':
			return "Buy effectively done."
		case 'sedan':
		case 'byke':
		case 'pickup truck':
			return "Are you sure that you don't prefere this other?"
		default:
			return "We don't work with this automobile type here"
	}	
}

console.log(carPicker('hatch'))
console.log(carPicker('sedan'))
console.log(carPicker('byke'))
console.log(carPicker('pickup truck'))
console.log(carPicker('off-road truck'))

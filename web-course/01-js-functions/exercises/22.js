function compoundInterest(initialCapital, rate, time){
	return initialCapital * (1 + rate)**time
}

function getAssociationPrice(month, valuePaid){
	
	// If paid in January, no extra interests are paid
	if(month == 1)
		return valuePaid

	return compoundInterest(valuePaid, 0.05, month - 1).toFixed(2)
}

console.log(getAssociationPrice(4, 100))

function getInsurancePrice( age ){
	let baseValue = 100
	
	if(age < 0)
		return null
	
	if(age < 10)
		return baseValue + 80

	if(age < 30)
		return baseValue + 50
		
	if(age < 60)
		return baseValue + 95

	return baseValue + 130
}

console.log(getInsurancePrice(9))
console.log(getInsurancePrice(-1))
console.log(getInsurancePrice(11))
console.log(getInsurancePrice(49))
console.log(getInsurancePrice(89))
console.log(getInsurancePrice(31))

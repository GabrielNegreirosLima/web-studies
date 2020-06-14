function simpleInterest(initialCapital, rate, time){
	return initialCapital + (initialCapital * rate * time)
}

function compoundInterest(initialCapital, rate, time){
	return initialCapital * (1 + rate)**time
}

console.log(simpleInterest(520, 0.01, 3))
console.log(compoundInterest(520, 0.01, 3))

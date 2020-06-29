function simpleInterest(initialCapital, rate, time){
	return initialCapital + (initialCapital * rate * time)
}

function compoundInterest(initialCapital, rate, time){
	return initialCapital * (1 + rate)**time
}

console.log(simpleInterest(20000, 0.05, 10))
console.log(compoundInterest(20000, 0.05, 25))

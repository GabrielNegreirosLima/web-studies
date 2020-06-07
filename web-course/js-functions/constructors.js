function Car (maxSpeed = 200, delta = 5) {
	// "private" attribute
	let instantSpeed = 0

	// "public" method
	this.accelerate = function () {		
		if (instantSpeed + delta <= maxSpeed)
			instantSpeed += delta
		else
			instantSpeed = maxSpeed
	}

	this.getInstantSpeed = function (){
		return instantSpeed
	}
}

const mercedes = new Car
mercedes.accelerate()
console.log(mercedes.getInstantSpeed())

const ferrari = new Car(350, 20)
ferrari.accelerate()
ferrari.accelerate()
ferrari.accelerate()
console.log(ferrari.getInstantSpeed())

console.log(typeof Car)
console.log(typeof ferrari)

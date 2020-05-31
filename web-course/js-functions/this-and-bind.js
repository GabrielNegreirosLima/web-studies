const person = {
	greetings: 'Good morning!',
	speak() {
		console.log(this.greetings)		// this is a must
	}
}

person.speak()

// Functional and Object-Oriented conflit: 
// const speak doesn't have greetings
const speak = person.speak
speak()

const personSpeaking = person.speak.bind(person)
personSpeaking()



function Person() {
	this.idade = 0

	const self = this
	setInterval(function () {
		self.idade++
		console.log(self.idade)
	}/*.bind(this)*/, 1000)		// note that bind could resolve without using self
}

a = new Person
console.log(a)

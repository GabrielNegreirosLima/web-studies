class Person{
	constructor(name){
		this.name = name
	}
	
	speak() {
		console.log(`My name is ${this.name}`)
	}
}

const person1 = new Person('Gabriel')
person1.speak()

const createPerson = name => { 
	return {
		speak: () => console.log(`My name is ${this.name}`)
	}
}

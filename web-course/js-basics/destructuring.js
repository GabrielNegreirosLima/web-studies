
const person = {
	name	: 'Gabriel',
	age		: 22,
	address	: {
		street: 'ABC',
		number: 900
	}
}

// Destructuring name and age from person
const { name, age } = person
console.log(name, age)

// Renaming after destructuring
const { name: n, age: a} = person
console.log(n, a)

// Default value to prevent undefined
const { lastName, happy = true } = person
console.log(lastName, happy)

// Nested attributes must be defined/not null for destructuring
const { company: { companyName, addr } } = person 	// TypeError


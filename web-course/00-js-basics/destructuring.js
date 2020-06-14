
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
// const { company: { companyName, addr } } = person 	// TypeError


// Destructuring Arrays...
const [someVar] = [10]
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

// With matrix... 
const[, [, value]] = [[, 8, 9], [1, 2, 3]]
console.log(value)


// With functions...
function rand({ min = 0, max = 1000}){		// Destructuring at the args
	
	if(min > max) [min, max] = [max, min]

	return Math.floor(Math.random() *  ( max - min ) + min)
}

const newObj = { max: 100, min: 40}
console.log(rand(newObj))
console.log(rand({ max: 5}))

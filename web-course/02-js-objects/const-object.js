// person -> 0x000123 -> {...}
// the reference address doesn't alter
const person = { name: 'John' }
person.name = 'Peter'
console.log(person)

// person -> 0x000245 -> {...}
// you can't alter the reference (with the creation of another object)
// person = { name: 'Gabriel' }	

// Lock the object itself to its properties be truly constant
Object.freeze(person)

person.name = 'Maria'
person.address = 'Av Amazonas'
delete person.name
console.log(person)

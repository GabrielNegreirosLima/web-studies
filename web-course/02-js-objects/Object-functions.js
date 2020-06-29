const person = {
	name: 'Gabriel',
	age: 56,
	weight: 85,
}

console.log(Object.keys(person))
console.log(Object.values(person))
console.log(Object.entries(person))

Object.entries(person).forEach(e => {
	console.log(`${e[0]}: ${e[1]}`)
})

// With destructuring
Object.entries(person).forEach( ([key, value]) => {
	console.log(`${key}: ${value}`)
})

Object.defineProperty(person, 'birthday', {
	enumerable: false,
	writable: false,
	value: '03/01/2020'
})

person.birthday = '01/10/2020'
console.log(person.birthday)
console.log(Object.keys(person))
console.log(person)


// Object.assign - ECMAScript 2015
const destination = { a: 1}
const origin1 = { b: 2}
const origin2 = { c: 3, a: 2}

const finalObj = Object.assign(destination, origin1, origin2)
console.log(finalObj)

Object.freeze(finalObj)
finalObj.c = 12
console.log(finalObj)

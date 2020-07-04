// Lock add but allow remove
const product = Object.preventExtensions({
	name: 'Any', price: 1.99, tag: 'promo'
})

console.log('Extensible: ', Object.isExtensible(product))

product.name = 'Eraser'
product.description = 'White to School'
delete product.tag
console.log(product)


// Sealing
const person = { name: 'Carlos', age: 35 }
Object.seal(person)

console.log('Sealed: ', Object.isSealed(person))

person.lastName = 'Ruas'
person.name = 'Ruan'
person.address = 'Av. Amazonas, 1000'
delete person.age
console.log(person)


// Freezing = sealing + constant values


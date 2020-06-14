// == compares only the values
console.log('1' == 1)

// === compares the values and types
console.log('1' === 1)

// The same behavior with the different comparison operator
console.log('1' != 1)
console.log('1' !== 1)

// For two different objects, as result of variables using reference, 
// we can use both operators (as they are seen as memory addresses)
const firstDate = new Date(0)
const secondDate = new Date(0)

console.log(firstDate == secondDate)
console.log(firstDate === secondDate)


console.log(undefined == null)   // true
console.log(undefined === null)  // false

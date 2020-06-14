
// Type: number ('N'umber is a function)
// ============
const weight1 = 1.0
const weight2 = Number('2.0')

console.log(weight1, weight2)

// true, number is a type for integer and for decimals
console.log(Number.isInteger(weight1)) 

const note1 = 9.8314
const note2 = 7.1236

const medium = (note1 * weight1 + note2 * weight2) / (weight1 + weight2)

console.log(medium)

// toFixed method doesn't change the 'medium' value

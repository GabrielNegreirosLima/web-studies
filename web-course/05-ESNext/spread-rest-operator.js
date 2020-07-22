// Spread example in previous-chapters.js!

// Spread with Objects
const employee = { name: 'Ana', salary: 1235.99 }
const clone = { ...employee }
console.log(employee === clone, employee, clone)

// With Arrays
const firstGroup = [ 'Gabriel', 'Daniel', 'Andreia' ]
const finalGroup = [ 'Luiz', 'Lucas', ...firstGroup ]
console.log(finalGroup)

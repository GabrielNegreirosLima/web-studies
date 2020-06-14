
let isActive = false
console.log(isActive)

isActive = true
console.log(isActive)

isActive = 1
console.log(!!isActive)

// The true ones (Using ! - not operator to force logical interpretation)
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)

// If attribution value is resolved to a boolean value, the return value below is that attribution value
console.log(!!(isActive = true)) 


// The false ones
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isActive = false))


// Checking boolean value for printing case
isActive = 'valid String'
console.log(('' || null || undefined || isActive))

// Only the first true value is taken 
console.log(('' || null || undefined || isActive || 'valid but not printed string'))

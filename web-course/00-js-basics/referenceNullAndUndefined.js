// In JS the attributions are by reference, so...

let a = { hello: "Hey You!"}
let b = a

b.hello = "Hey there!"

console.log(a.hello)


// undefined - Default value for non-initialized vars 
let firstVar
console.log(firstVar)


// null - non-valued var, but defined
let secondVar = null
console.log(secondVar)

// TypeError: cannot read property 'toString' of null	
console.log(secondVar.toString()) 


const product = {}

// Undefined
console.log(product.price)

// TypeError: cannot read property 'toString' of undefined
console.log(product.price.a)


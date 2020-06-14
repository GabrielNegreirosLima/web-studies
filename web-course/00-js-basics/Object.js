// JSON is not a Javascrit Object

// Object (collection of key-value) - Literal creation 

const firstObject = {}
firstObject.name = 'Object Number 1'
firstObject.price = 749.90

// Using spaced attributes is NOT a goodpractice
firstObject['Some Discount'] = 0.10		

console.log(firstObject)



const secondObject = { 
	name: 'T-Shirt 1',
	price: 129.90,
		
	// Must have unique names in same scope
	subObj: { 
		oneAtt: 1,
		subObj:{ 
			oneAtt: 2
		}
	}
}

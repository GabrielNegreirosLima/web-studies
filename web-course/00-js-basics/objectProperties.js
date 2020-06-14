// Two same ways to access object attributes
const example = {}
example.name 	= 'First name'
example['name']	= 'Other name'



// Public function attributes
function Thing(name){
	this.name = name

	this.someFunc = function(){ 
		console.log("Outputing...")
	}
}

const firstObj = new Thing('Chair')
const secondObj= new Thing('Table')
console.log(firstObj)
console.log(secondObj.name)
secondObj.someFunc()

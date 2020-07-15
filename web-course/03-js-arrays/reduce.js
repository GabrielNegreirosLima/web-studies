Array.prototype.mySimplifiedReduce = function(callback, initialValue){
	const firstIndex = initialValue ? 0 : 1
	let acum = initialValue || this[0]
		
	for(let i=firstIndex; i < this.length; i++){
		acum = callback(acum, this[i], i, this)
	}

	return acum
}

const students = [
	{ name: 'Gabriel', grade: 7.8, scholarship: false },
	{ name: 'Lucas', grade: 9.3, scholarship: false },
	{ name: 'Luiz', grade: 8.9, scholarship: false }
]

const result = students.map( student => student.grade ).reduce(
	function(acum, value, index, array) {
		console.log(acum, value)
		return acum + value
	}
)

console.log(result)

// Does every student has a scolarship? 
const every = students.map( student => student.scholarship).reduce(
( acum, value ) => {
	return acum && value
}, true)

console.log(`Does every student has a scolarship? Aws: ${every ? 'Yes': 'No'}`)


// Does some student has a scolarship? 
const some = students.map( student => student.scholarship).reduce(
( acum, value ) => {
	return acum || value
}, false)

console.log(`Does every student has a scolarship? Aws: ${ some ? 'Yes': 'No'}`)


const test = students.map( student => student.scholarship).mySimplifiedReduce(
( acum, value ) => {
	return acum || value
}, false)

console.log(`[My Reduce] Does every student has a scolarship? Aws: ${ 
	test ? 'Yes': 'No'
}`)

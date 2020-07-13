const students = [
	{ name: 'Gabriel', grade: 7.8, scholarship: true },
	{ name: 'Lucas', grade: 9.3, scholarship: true },
	{ name: 'Luiz', grade: 8.9, scholarship: false }
]

const result = students.map( student => student.grade ).reduce(
	function(acum, value, index, array) {
		console.log(acum, value)
		return acum + value
	}
)

console.log(result)

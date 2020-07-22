function tag(pieces, ...values){
	console.log(pieces)
	console.log(values)
	return 'Another string'
}

const student = 'Gabriel'
const state = 'Approved'
console.log(tag `${student} is ${state}!`)


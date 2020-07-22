function tag(pieces, ...values){
	console.log(pieces)
	console.log(values)
	return 'Another string'
}

const student = 'Gabriel'
const state = 'Approved'
console.log(tag `${student} is ${state}!`)


function toReal(pieces, ...values){
	const result = []
	values.forEach((value, index) => {
		value = isNaN(value) ? value : `R$${value.toFixed(2)}`
		result.push(pieces[index], value)
	})
	return result.join('')
}

const price = 29.99
const piece = 10
console.log(toReal `1x is ${price} or 3x of ${piece}`)

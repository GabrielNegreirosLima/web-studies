const integers = [2, 3, 5, 8]
const strings = ['dale', 'dele', 'dili', 'doli']
const doubles = [2.3, 3.5, 5.8, 8.2]

console.log(integers
			.concat(doubles)
			.concat(strings)
)
console.log(integers
			.concat(
				doubles.concat(strings)
			)
)

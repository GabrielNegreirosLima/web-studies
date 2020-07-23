// Promise, for asyncronous processing
function speakAfterOf(seconds, phrase){
	return new Promise((resolve, reject)=> {
		setTimeout(() => {
			resolve(phrase)
		}, seconds * 1000)
	})
}

speakAfterOf(3, 'Nice resource!!!')
	.then(phrase => phrase.concat('?!?'))
	.then(otherPhrase => console.log(otherPhrase))



// Nested Callbacks, and why Promises was created
const http = require('http')

const getClass = (letter, callback) => {
	const url = `http://files.cod3r.com.br/curso-js/turma${letter}.json`

	http.get(url, res => {
		let result = ''

		res.on('data', data => {
			result += data
		})

		res.on('end', () => {
			callback(JSON.parse(result))
		})
	})
}

let names = []
getClass('A', students => {
	names = names.concat(students.map(a => `A: ${a.nome}`))
	
	getClass('B', students => {
		names = names.concat(students.map(a => `B: ${a.nome}`))
		
		getClass('C', students => {
			names = names.concat(students.map(a => `C: ${a.nome}`))
			console.log(names)
		})
	})
})	

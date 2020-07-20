const fs = require('fs')

const path = __dirname + '/initial.json'

// If made syncronous with a big file, event loop 
// will be overcharged
const data = fs.readFileSync(path, 'utf-8')
console.log(data)

// Asyncronous
fs.readFile(path, 'utf-8', (err, data) => {
	if(err !== null){
		console.log(`Error: ${err}`)
		return
	}

	const config = JSON.parse(data)
	console.log(`${config.db.host}:${config.db.port}`)
})

// For JSON it's usually more simple
const config = require('./initial.json')

// Note that how fs.readFile is asyncronous, the following
// console.log can be shown before the localhost:5432
console.log(config)

fs.readdir(__dirname, (err, data) => {
	console.log('Directory files...')
	console.log(data)
})


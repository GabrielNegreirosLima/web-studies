const fs = require('fs')

const product = {
	smartphone: 'Redmi',
	price: 1000,
	discount: 0.05
}


fs.writeFile(__dirname + '/writed.json', JSON.stringify(product), err => {
	if(err !== null){
		console.log(`Error: ${err}`)
		return
	}
	
	console.log('File written')
})

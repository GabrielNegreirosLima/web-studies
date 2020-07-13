const approved = ['Gabriel', 'Daniel', 'Carlos']

approved.forEach(function(value, index, array){
	console.log(`${index + 1}: ${value}`)
	console.log(array)
})

const printNames = name => console.log(name)
approved.forEach(printNames)



Array.prototype.myForEach = function(callback){
	for(let i=0; i < this.length; i++){
		callback(this[i], i, this)
	}
};

const same = ['Gabriel', 'Daniel', 'Carlos']
same.myForEach(name => console.log(`\n${name}`))

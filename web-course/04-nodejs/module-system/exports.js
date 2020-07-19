console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3

// module.exports isn't changed by the 'exports' reference
exports = null
console.log(module.exports)

exports = {
	name: 'Test'
}
console.log(module.exports)

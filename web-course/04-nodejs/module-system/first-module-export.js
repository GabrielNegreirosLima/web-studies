// Each file represents a module
// A module is self-contained, so its functions
// and variables are only seen by the owner module

this.hello = 'Hey!'						// can be seen in another file
exports.welcome = 'Welcome to node!'	// do the same
module.exports.seeya = 'Until later!'	// do the same

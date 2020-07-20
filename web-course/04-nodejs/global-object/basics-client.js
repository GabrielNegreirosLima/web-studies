// As the basics-global module code is within global scope, 
// you can just require it without storing in a variable,
// and it's you need to require it once to be seen in all modules.
// The modules system exists for correcting this barbarism
require('./basics-global')

console.log(MyApp.greetings())

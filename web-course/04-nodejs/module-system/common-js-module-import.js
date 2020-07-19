// Common JS import specification
const firstModule = require('./first-module-export')
const secondModule = require('./second-module-export')

console.log(firstModule.hello)
console.log(firstModule.welcome)
console.log(firstModule.seeya)
console.log(firstModule)

console.log(secondModule.goodMorning)
console.log(secondModule.goodNight())

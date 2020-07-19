// yarn add lodash executed in ../

// Search for index.js inside node_modules (that has require('./lodash'))
const _ = require('lodash')

setInterval(() => console.log(_.random(1, 1000)), 2000)

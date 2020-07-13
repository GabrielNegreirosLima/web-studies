const drivers = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

// Last position
drivers.pop()
console.log(drivers)

drivers.push('Verstappen')
console.log(drivers)

// First position
drivers.shift()
console.log(drivers)

drivers.unshift('Hamilton')
console.log(drivers)

// Splice can be used to add or delete elements
drivers.splice(1, 2, 'Bottas', 'Massa')
console.log(drivers)


// Slice
let someDrivers = drivers.slice(1)
console.log(someDrivers)

someDrivers = drivers.slice(1, 3) // doesn't include 3
console.log(someDrivers)

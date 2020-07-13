console.log(typeof Array, typeof new Array, typeof [] )

let approved = new Array('Beatrice', 'Gabriel', 'Lucas')
console.log(approved)

approved = ['Beatrice', 'Gabriel', 'Lucas']
console.log(approved[0])
console.log(approved[1])
console.log(approved[2])
console.log(approved[3])

approved[3] = 'Daniel'
console.log(approved[3])

approved.push('Carlos')
console.log(approved.length)

approved[8] = 'Juan'
console.log(approved.length)

// Chooses the best sort algorithm based on arrays length
// The original array is sorted (it doesn't return a new array)
approved.sort()
console.log(approved)


delete approved[1]
console.log(approved[1])
console.log(approved[2])

approved = ['Beatrice', 'Gabriel', 'Lucas']
approved.splice(1, 2)
console.log(approved)

approved = ['Beatrice', 'Gabriel', 'Lucas']
approved.splice(1, 2, 'e1', 'e2')
console.log(approved)

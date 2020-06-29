const first = 1
const second = 2
const third = 3

// Before ES6
const firstObj = {
	first: first,
	second: second,
	third: third,
}

// After
const secondObj = {	first, second, third } 

console.log(firstObj, secondObj)

const key = 'grade'
const value = 7.87
const thirdObj = {}

thirdObj[key] = value
console.log(thirdObj)

const fourthObj = {[key]: value}
console.log(fourthObj)


const fifthObj = {
	firstFunc: function() {
		// ...
	},	
	secondFunc(){
		// ...
	}
}
console.log(fifthObj)

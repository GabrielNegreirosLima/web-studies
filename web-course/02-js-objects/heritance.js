// Basic notions of [[Prototype]] (concept) and prototype (object)
const ferrari = {
	model: 'F40',
	maxSpeed: 324
}

const volvo = {
	model: 'V40',
	maxSpeed: 200
} 

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)

console.log(Object.prototype.__proto__)


function MyObject() {}
console.log(typeof Object, typeof MyObject)
console.log(Object.prototype, MyObject.prototype)


// Prototype chain
Object.prototype.zero = '0'
const grandfather = { first: 'A' }
const father = { __proto__: grandfather, second: 'B', third: 'D'}
const son = { __proto__: father, third: 'C'}

console.log(son)


// Other examples
console.log(`\n// Other examples`)
const car = {
	currentSpeed: 0,
	maxSpeed: 200,

	accelerate(delta){
		if(currentSpeed + delta <= this.maxSpeed){
			this.currentSpeed += delta
			return
		}

		this.currentSpeed = this.maxSpeed
	},

	status() {
		return `${this.currentSpeed}Km/h`
	}
}

const lamborghini = {
	model: 'L40',
	maxSpeed: 350 		// shadowing
}

Object.setPrototypeOf(lamborghini, car)
console.log(ferrari)


// hasOwnProperty
console.log(`\n//hasOwnPropert`)
const dad = { name: 'Gabriel', hairColor: 'black' }
const firstDaughter = Object.create(dad)
firstDaughter.name = 'Ana'
console.log(firstDaughter.hairColor)

const secondDaughter = Object.create(dad, {
	name: {value: 'Bia', writable: false, enumerable: true}
})

console.log(secondDaughter)
secondDaughter.name = 'Carla'
console.log(`${secondDaughter.name} has ${secondDaughter.hairColor} hair`)

console.log(Object.keys(firstDaughter))
console.log(Object.keys(secondDaughter))

for(let key in secondDaughter){
	secondDaughter.hasOwnProperty(key) ? 
		console.log(key) : console.log(`By heritance: ${key}`)
}


// Constructors and [[Prototype]]
function MyObject() {} 
console.log(MyObject.prototype) 

const obj1 = new MyObject
const obj2 = new MyObject
console.log(obj1.__proto__ === obj2.__proto__)
console.log(MyObject.prototype === obj2.__proto__)

MyObject.prototype.name = 'Anon'
MyObject.prototype.speak = function (){
	console.log(`Good morning! My name is ${this.name}`)
}

obj1.speak()

obj2.name = 'Gabriel'
obj2.speak()

const obj3 = {} 					// __proto__ = Object.prototype
obj3.__proto__ = MyObject.prototype
obj3.name = 'Object 3'



// new operator behavior
function Room(name, key){
	this.name = name
	this.key = key
}

const firstRoom = new Room('kitchen', 123)
const secondRoom = new Room('bedroom', 456)

function otherNew(func, ...params){
	const obj = {}
	
	obj.__proto__ = func.prototype
	func.apply(obj, params)
	return obj
}

const thirdRoom = otherNew(Room, 'shower', 789)
console.log({ firstRoom, secondRoom, thirdRoom })

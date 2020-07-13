// Classes are functions in practice
class Bill {
	constructor(name = 'Generic Name', value = 0){
		this.name = name
		this.value = value
	}
}

class FinancesCycle {
	constructor(month, year){			
		this.month = month
		this.year = year
		this.bills = []
	}

	addBills(...bills){
		bills.forEach(b => this.bills.push(b))
	}

	summary(){
		let consolidated = 0
		
		this.bills.forEach(b => { 
			consolidated += b.value
		})
		return consolidated
	}
}

const salary = new Bill('Salary', 400000)
const lightTax = new Bill('Light', -300)

const cycle = new FinancesCycle(6, 2030)
cycle.addBills(salary, lightTax)
console.log(cycle.summary())


// Heritance
class Grandfather {
	constructor(lastName) {
		this.lastName = lastName
	}
}

class Father extends Grandfather {
	constructor(lastName, profession = 'Professor'){
		super(lastName)
		this.profession = profession
	}
}

class Son extends Father {
	constructor() {
		super('Silva')
	}
}

const son = new Son
console.log(son)

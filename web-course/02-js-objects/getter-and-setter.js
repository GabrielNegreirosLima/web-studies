const sequence = {
	// this doesn't lock the property as private, but it's a convention
	_value: 1,
	get value(){
		return this._value++
	},
	set value( value ){
		if(value > this.value)
			this._value = value
	}
}

console.log(sequence.value, sequence.value)

sequence.value = 10000
console.log(sequence.value, sequence.value)

sequence.value = 100
console.log(sequence.value, sequence.value)

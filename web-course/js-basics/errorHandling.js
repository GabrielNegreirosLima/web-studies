function resolveAndThrowError(error) {
	/* There are different cases for throw
	*  throw 10
	*  throw false
	*  throw 'message'
	*  throw new Error('some message')
	*/
	throw {
		name: error.name,
		msg : error.msg,
		date: new Date
	}
}

function printNameCalling(someObject) {
	try {
		console.log(someObject.name.toUpperCase() + '!!!')
	} 
	catch (e) {
		resolveAndThrowError(e)
    }
	finally {
		console.log('Final statement')
	}
}

const someObject = { nami: 'Gabriel' }
printNameCalling(someObject)

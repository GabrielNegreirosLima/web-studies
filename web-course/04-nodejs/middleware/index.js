const first = (context, next) => {
	context.firstValue = 'First Middleware'
	next()
}

const second = (context, next) => {
	context.secondValue = 'Second Middleware'
	next()
}

const third = (context, next) => context.thirdValue = 'Third Middleware'

const exec = (context, ...middlewares) => {
	const execMiddleware = index => {
		middlewares && index < middlewares.length &&
			middlewares[index](context, () => execMiddleware(index + 1))
	}
	
	execMiddleware(0)
}

let context = {} 
exec(context, first, second, third)
console.log(context)

context = {}
exec(context, first, third)
console.log(context)

context = {}
exec(context, second, first)
console.log(context)

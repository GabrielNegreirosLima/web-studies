const tech = new Map()
tech.set('bash', { framework: false })
tech.set('angular', { framework: true })

console.log(tech.bash)
console.log(tech.get('bash'))
console.log(tech.get('bash').framework)
console.log(tech)

const manyKeys = new Map([
	[function ()  { }, 'Function'],
	[{}, 'Object'],
	[12, 'Number']
])
console.log(manyKeys)

manyKeys.forEach((value, key) => {
	console.log(key, value)
})

console.log(manyKeys.has(12))
manyKeys.delete(12)				// If exists, returns true
console.log(manyKeys.has(12))
console.log(manyKeys.size)

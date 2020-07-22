const anom = process.argv.indexOf('-flag') !== -1
console.log(anom)

if(anom){
	process.stdout.write('Hey dude, right flag!\n')
	process.exit()
}

process.stdout.write('Tell me your name: ')
process.stdin.on('data', data => {
	const name = data.toString().replace('\n', '')
	
	process.stdout.write(`Wassup ${name}!\n`)
	process.exit()
})

const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'

// axios is a HTTP client
const axios = require('axios')

axios.get(url).then(response => {
	const employees = response.data
	//console.log(employees)
	
	// Wich is the Chinese woman with the lowest salary?
	const fromChina = value => value.pais === 'China'
	const isWoman = value => value.genero === 'F'
	
	const lowestSalary = function( acum, value ) { 
		return acum.salario > value.salario ? value : acum
	}

	const result = employees.filter(fromChina) 
							.filter(isWoman)
							.reduce(lowestSalary)
						
	console.log(`${result.nome} ${result.sobrenome}`)
})


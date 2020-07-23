// Non indexed structure that doesn't accept repetitions
const teams = new Set()

teams.add('Cruzeiro')
teams.add('Athletico').add('Flamengo')
teams.add('Cruzeiro')

console.log(teams)
console.log(teams.size)
console.log(teams.has('cruzeiro'))
console.log(teams.has('Cruzeiro'))
teams.delete('Cruzeiro')
console.log(teams.has('Cruzeiro'))

const names = ['Gabriel', 'Negreiros', 'Lima', 'Lima']
const namesSet = new Set(names)
console.log(namesSet)


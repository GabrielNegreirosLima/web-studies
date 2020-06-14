
// Literal Array declaration
const firstArray = [7.7, 8.9, 5.4, 9.1]
console.log(firstArray[0], firstArray[3])

// Out of declared positions, the return is undefined, not causing error
console.log(firstArray[4])

// Undefined positions are seen as empty itens
firstArray[10] = 12
console.log(firstArray)


firstArray.push({id: 3}, false, null, 'teste')
console.log(firstArray)
console.log(firstArray.pop())

// Remove the item from the Array and puts undefined type item there
delete firstArray[0]
console.log(firstArray)


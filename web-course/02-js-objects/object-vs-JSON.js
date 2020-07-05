const object = { a: 1, b: 2,  c: 3, sum(){ return a + b + c } }
console.log(JSON.stringify(object))
 
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'))
console.log(JSON.parse('{ "a": 1, "b": "string", "c": true , "d": {}, "e": [] }'))

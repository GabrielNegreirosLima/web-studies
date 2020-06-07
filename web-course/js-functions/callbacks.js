const brands = ["Mercedes", "Audi", "BMW"]

function printing(name, index){
	console.log(`${index}. ${name}`)
}

brands.forEach(printing)
brands.forEach(brand =>	console.log(brand))

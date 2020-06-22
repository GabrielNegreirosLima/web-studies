function arithmeticalProgression(number, first, ratio){

	let result = first	
	let term
	process.stdout.write(`AP: ${first}`);

	for(let i=0; i < number-1; i++){
		term = ratio * (i+1) + first
		result += term
		process.stdout.write(` + ${term}`);
	}

	process.stdout.write(` = ${result} \n`);
}

function geometricProgression(number, first, ratio){

	let result = first	
	let term
	process.stdout.write(`GP: ${first}`);

	for(let i=0; i < number-1; i++){
		term = Math.pow(ratio, i+1) * first
		result += term
		process.stdout.write(` + ${term}`);
	}

	process.stdout.write(` = ${result} \n`);
}

geometricProgression(9, 4, 2)


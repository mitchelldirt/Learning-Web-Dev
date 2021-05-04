function bitwiseAND(n1, n2) {
	let result = [];
	let finalResult = 0;
	let currentNumber;
	n1 = toString(n1).split;
	n2 = toString(n2).split;
	for (i = 0; i < 9; i++) {
		if (n1[i] === n2[i]) {
			currentNumber = n1[i];
			result.push(currentNumber);
		} else {
			result.push('0');
		}
	}
	for (x = 0; x < 9; x++) {
		let numberToAdd = parseInt(result[x]);
		finalResult += numberToAdd;
	}
    return finalResult;
}

bitwiseAND(6, 23);
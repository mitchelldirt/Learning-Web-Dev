function bitwiseAND(n1, n2) {
	let result = [];
	let finalResult = 0;
	let currentNumber;
	n1 = n1.toString(2);
	n2 = n2.toString(2);
	n1Length = n1.length;
	n2Length = n2.length;
	n1.padStart(8 - n1Length, 0);
	n2.padStart(8 - n2Length, 0);
	for (i = 9; i > -1; i--) {
		if (n1[i] === n2[i] && n1[i] != undefined) {
			currentNumber = n1[i];
			result.push(currentNumber);
		} else if (result === undefined) {
            result.push('0');
        } 
        else {
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
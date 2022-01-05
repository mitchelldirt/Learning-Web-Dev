function endZeros(value: number): number {
    let stringValue: String = value.toString();
    let solutionArray: String[] = [];
    for (let i = stringValue.length - 1; i > -1; i--) {
        if (stringValue[i] === "0") {
            solutionArray.push(stringValue[i]);
        } else {
            break;
        }
    }
    return solutionArray.length;
};
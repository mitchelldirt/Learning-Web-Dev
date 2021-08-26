function backwardString(value: string): string {
    let solutionArray: String[] = [];
    for (let i = value.length - 1; i > -1; i--) {
        solutionArray.push(value[i]);
    }
    return solutionArray.join('');
}
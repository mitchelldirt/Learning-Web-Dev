function splitPairs(text: string): String[] {
    let solution: String[] = [];
    let stop: number = 2;
    for (let i: number = 0; i < text.length; i += 2) {
        let textSlice: string = text.slice(i, stop);
        solution.push(textSlice);
        stop = stop + 2;
    }
    // Check if the texts length is odd. If it is add an underscore at the end.
    if (text.length % 2 !== 0) {
        let index: number = solution.length - 1;
        solution[index] = solution[index] + "_";
    }
    return solution;
}
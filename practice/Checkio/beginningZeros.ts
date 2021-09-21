function beginningZeros(text: string): number {
    let zeros: string = "";
    for (let numbers of text) {
        if (numbers === "0") {
            zeros += "0"
        } else { break; }
    }
    return zeros.length;
};
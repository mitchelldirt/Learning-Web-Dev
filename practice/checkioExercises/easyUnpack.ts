// Function to grab the first, third, and second to last elements from an array.
function easyUnpack(values: any[]): any[] {
    let solutionArray: number[] = [];
    solutionArray.push(values[0], values[2], values[values.length - 2]);
    return solutionArray;
};
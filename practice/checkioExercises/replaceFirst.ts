function replaceFirst(values: number[]): number[] {
    if (values === [] || values.length === 0) {
        return values;
    } else {
    let firstValue : number = values.shift();
    values.push(firstValue);
    return values;
    }
}
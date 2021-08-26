function removeAllBefore(values: number[], b: number): number[] {
    for (let i = 0; i < values.length; i++) {
        if (values[i] === b) {
            let index: number = i;
            return values.slice(index);
        }
    }
    return values;
}
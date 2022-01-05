function nearestValue(values: number[], search: number): number {
    values.sort(function (a: number, b: number): number {
        return a - b;
    });
    let arr: number[] = values.map(x => Math.abs(search - x));
    let minimum: number = Math.min(...arr);
    return values[arr.indexOf(minimum)];
};

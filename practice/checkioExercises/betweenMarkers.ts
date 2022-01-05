function betweenMarkers(line: string, left: string, right: string): string {
    let index1: number = line.indexOf(left);
    let index2: number = line.indexOf(right);
    return line.slice(index1 + 1, index2);
}
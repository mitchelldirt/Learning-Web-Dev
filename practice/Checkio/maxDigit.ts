function maxDigit(value: number): number {
    function toNumber(value: string): number {
    return Number(value)
    }
    let stringNumber : string = value.toString();
    let splitArray : string[] = stringNumber.split('');
    for (let i = 0; i < splitArray.length; i++) {
        toNumber(splitArray[i])
    }
    for (let i = 0; i < splitArray.length; i++) {
        let max : number = splitArray[0];
        if (splitArray[i] > max) {
            max = splitArray[i]
        } else {
            continue;
        }
return max;
    } 
}
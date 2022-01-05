function maxDigit(value: number): number {
        let values : number[] = String(value).split('').map(item => Number(item))
        return Math.max(...values);
    }
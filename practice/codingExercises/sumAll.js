const sumAll = function (x, y) {
    if (x < 0 || y < 0) {
        return 'ERROR';
    } else if (typeof x != 'number' || typeof y != 'number') {
        return 'ERROR';
    } else if (x > y) {
        result = y;
        for (let i = y + 1; i < x + 1; i++) {
            result += i;
        }
        return result;
    } else {
        result = x;
        for (let i = x + 1; i < y + 1; i++) {
            result += i;
        }
        return result;
    }
}
module.exports = sumAll

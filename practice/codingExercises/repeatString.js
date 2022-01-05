const repeatString = function (str, num) {
    if (num < 0) {
        return 'ERROR';
    } else {
        let result = '';
        for (let i = 0; i < num; i++) {
            result += str;
        }
        console.log(result);
        return result;
    }
}

repeatString('slow', 5);

module.exports = repeatString

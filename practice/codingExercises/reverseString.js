const reverseString = function(str) {
    let splitString = str.split('');
    splitString = splitString.reverse();
    return splitString.join('');
}

module.exports = reverseString

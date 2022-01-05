const leapYears = function(year) {
    if (year % 100 === 0 && year % 400 != 0) {
        console.log('Not a leap year');
        return false;
    } else if (year % 400 === 0) {
        console.log('Tis a leap year');
        return true;
    } else if (year % 4 === 0) {
        console.log('Tis a leap year!');
        return true;
    }
    else {
        console.log('Not a leap year');
        return false;
    }
}
module.exports = leapYears

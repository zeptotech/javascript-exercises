const sumAll = function (integer1, integer2) {
    let sum = 0;

    if (integer1 < 0 || integer2 < 0) {
        return "ERROR";
    } else if (Number.isInteger(integer1) == false || Number.isInteger(integer2) == false) {
        return "ERROR";
    }

    if (integer1 < integer2) {
        for (i = integer1; i <= integer2; i++) {
            sum += i;
        }
    } else {
        for (i = integer2; i <= integer1; i++) {
            sum += i;
        }
    }
    return sum;
};

// loop through two integers
// -add each integer between the two (including the two selected)
// -return total sum


// Do not edit below this line
module.exports = sumAll;

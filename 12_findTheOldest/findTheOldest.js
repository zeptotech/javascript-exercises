const findTheOldest = function (array) {
    // add "death" year if no death year (still living)
    for (const element of array) {
        if (element.yearOfDeath === undefined) {
            element.yearOfDeath = new Date().getFullYear();
        }
    }

    // sorts through array and bubbles oldest (perhaps living) person to the top
    array.sort(function compareFn(a, b) {
        let guy1 = a.yearOfDeath - a.yearOfBirth;
        let guy2 = b.yearOfDeath - b.yearOfBirth;

        if (guy1 > guy2) {
            return -1;
        } else {
            return 1;
        }
    });
    return array[0];
};

// Do not edit below this line
module.exports = findTheOldest;

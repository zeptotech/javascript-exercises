const reverseString = function (string) {
    let stringReverse = "";

    for (let i = 1; i < string.length + 1; i++) {
        let currentLetter = string.length - i;
        stringReverse += string[currentLetter];
    }
    return stringReverse;
}


// Do not edit below this line
module.exports = reverseString;

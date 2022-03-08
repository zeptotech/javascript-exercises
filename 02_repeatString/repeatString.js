const repeatString = function (string, num) {
    let currentString = string;

    if (num === 0) {
        return "";
    } else if (num < 1) {
        return "ERROR";
    }
    for (let i = 1; i < num; i++) {
        currentString = currentString + string;
    }
    return currentString;
};

// Do not edit below this line
module.exports = repeatString;

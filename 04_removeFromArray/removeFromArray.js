const removeFromArray = function (array) {
    // iterate through arguments starting at position 1 (0th is array)
    for (let i = 1; i < arguments.length; i++) {
        // iterate through array comparing with ith argument (2 to go through total)
        for (let j = 0; j < array.length; j++) {
            if (array[j] === arguments[i]) {
                // delete ith element (same value as element)
                array.splice(j, 1);
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;

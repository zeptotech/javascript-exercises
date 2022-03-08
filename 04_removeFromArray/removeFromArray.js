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

// 3 arguments total
// -first is array
// -second and third are elements to remove

// -iterate (loop) through array
// -check with second argument
// -check with third argument

// --if value is equal to given argument
// -remove value from array
// -return array

// Do not edit below this line
module.exports = removeFromArray;


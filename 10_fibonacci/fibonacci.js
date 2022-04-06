const fibonacci = function (num) {
    if (num < 0) {
        return "OOPS";
    }

    num = Number(num);

    let array = [1, 1]

    for (let i = 1; i < num - 1; i++) {
        array.push(array[i] + array[i - 1]);
    }

    return array[num - 1];
};

// create array
// create loop
// push latest calculation (sum) into array
// return nth element of array

// Do not edit below this line
module.exports = fibonacci;

const palindromes = function (input) {
    let output = removeSpace(input);
    output = removePunctuation(output);

    let reverseOutput = reverse(output);

    if (output === reverseOutput) {
        return true;
    } else {
        return false;
    }
}

// turns string into array and reverses it (changes it back to string afterwards)
function reverse(string) {
    let reverse = Array.from(string);
    reverse = reverse.reverse();
    reverse = reverse.join("")

    return reverse;
}

// changes everything to lower case
function removeSpace(string) {
    let output = string
        .toLowerCase();

    return output;
}

// remove punctuation AND spaces
function removePunctuation(string) {
    // backslash is an excape character, to use it you will need two backslashes
    // also added space to remove spaces

    let punctuation = "!\"#$%&'()*+,-./:;<=>?@^_`{|}~[\\] ";

    return string
        .split("")
        .filter(function (letter) {
            // iterates through whole string look at each letter, 0 would return first index of punctuation
            // -1 would mean it is not present
            return punctuation.indexOf(letter) === -1;
        })
        .join("");
}













// -Trim all spaces and punctuation and numbers
// -Make whole strong lowercase

// -reverse string (and store stringreverse)

// -compare original string with reversed string
// -Output comparison result (true, false)


// Do not edit below this line
module.exports = palindromes;

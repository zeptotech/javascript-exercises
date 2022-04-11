const caesar = function (string, key) {
    // create two arrays, one to convert to ASCII  and one to convert back to characters
    let outputASCII = [];
    let outputLetter = []

    // function for ascii output array

    for (let i = 0; i < string.length; i++) {
        outputASCII.push(string.charCodeAt(i));
    }

    // convert back to characters, modifying letters but nothing else
    outputASCII.filter(function (letter) {
        // if upper case
        if (letter > 64 && letter < 91) {
            // adds use case for negative key
            letter -= 65;
            if (key < 0) {
                outputLetter.push(String.fromCharCode((letter + key + 26) % 26 + 65));
            } else {
                outputLetter.push(String.fromCharCode((letter + key) % 26 + 65));
            }

            // if lower case
        } else if (letter > 96 && letter < 123) {
            // adds use case for negative key

            letter -= 97;
            if (key < 0) {
                outputLetter.push(String.fromCharCode((letter + key + 26) % 26 + 97))
            } else {
                outputLetter.push(String.fromCharCode((letter + key) % 26 + 97));
            }

            // if punctuation
        } else {
            outputLetter.push(String.fromCharCode(letter));
        }
    })

    outputLetter = outputLetter.join("");

    return outputLetter;
};

// loop through string
// determine if letter or punctuation/space
// convert to array
// if punctuations/space append to array
// if letter convert to ASCII
// loop through array
// if punctuation, ignore
// if ASCII, convert to encrypted text using key
// turn back ASCII to character
// return array to string
// return string

// Do not edit below this line
module.exports = caesar;

const caesar = function (string, key) {
    let outputASCII = [];
    let outputLetter = []

    for (let i = 0; i < string.length; i++) {
        outputASCII.push(string.charCodeAt(i));
    }

    outputASCII.filter(function (letter) {
        // if upper case
        if (letter > 64 && letter < 91) {
            letter -= 65;
            if (key < 0) {
                outputLetter.push(String.fromCharCode((letter + key + 26) % 26 + 65));
            } else {
                outputLetter.push(String.fromCharCode((letter + key) % 26 + 65));
            }

            // if lower case
        } else if (letter > 96 && letter < 123) {
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

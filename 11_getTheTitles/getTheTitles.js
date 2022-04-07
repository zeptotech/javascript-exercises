const getTheTitles = function (array) {
    let titleList = [];
    for (const book of array) {
        titleList.push(book.title);
    }
    return titleList;
};



// Do not edit below this line
module.exports = getTheTitles;

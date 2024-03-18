// Random num from "min" to "max".
var intRandom = function (min, max) { return Math.floor(Math.random() * (max + 1 - min) + min); };
var randomChoice = function (array) {
    var rand = Math.floor(Math.random() * array.length);
    return array[rand];
};
// random changing
var replacement = function () {
    // // index container
    // const afterListIndex = [];
    var prevList = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        prevList[_i] = arguments[_i];
    }
    // result container
    var afterList = [];
    var random;
    while (prevList.length !== afterList.length) {
        random = Math.floor(Math.random() * prevList.length);
        if (afterList.includes(prevList[random])) {
            // if include skip --> don't do anything, and go to head.
            continue;
        }
        else {
            // if passed add.
            afterList.push(prevList[random]);
        }
    }
    return afterList;
};
console.log(replacement('A', 'B', 'C'));

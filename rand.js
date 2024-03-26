"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomChoice = exports.replacement = exports.intRandomsNoRepeat = exports.intRandoms = exports.intRandom = void 0;
// Random num from "min" to "max".
var intRandom = function (min, max) { return Math.floor(Math.random() * (max + 1 - min) + min); };
exports.intRandom = intRandom;
var randomChoice = function (array) {
    var rand = Math.floor(Math.random() * array.length);
    return array[rand];
};
exports.randomChoice = randomChoice;
// random changing
var replacement = function () {
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
exports.replacement = replacement;
var intRandoms = function (min, max, piece) {
    var rands = [];
    for (var i = 0; i < piece; i++) {
        rands.push(intRandom(min, max));
    }
    return rands;
};
exports.intRandoms = intRandoms;
var intRandomsNoRepeat = function (min, max, piece) {
    if ((max - min) < piece) {
        throw new Error("Value Error! max-min < piece => I must be repeat!!");
    }
    var rands = [];
    while (rands.length !== piece) {
        var rand = intRandom(min, max);
        if (rands.includes(rand)) {
            continue;
        }
        else {
            rands.push(rand);
        }
    }
    return rands;
};
exports.intRandomsNoRepeat = intRandomsNoRepeat;

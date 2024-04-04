// Random num from "min" to "max".
const intRandom = (min, max) => Math.floor(Math.random() * (max + 1 - min) + min);
const randomChoice = (array) => {
    const rand = Math.floor(Math.random() * array.length);
    return array[rand];
};
// random changing
const replacement = (...prevList) => {
    // result container
    const afterList = [];
    let random;
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
const intRandoms = (min, max, piece) => {
    let rands = [];
    for (let times = 0; times < piece; times++) {
        rands.push(intRandom(min, max));
    }
    return rands;
};
const intRandomsNoRepeat = (min, max, piece) => {
    if ((max - min) < piece) {
        throw new Error("Value Error! max-min < piece => I must be repeat!!");
    }
    const rands = [];
    while (rands.length !== piece) {
        let rand = intRandom(min, max);
        if (rands.includes(rand)) {
            continue;
        }
        else {
            rands.push(rand);
        }
    }
    return rands;
};
const randomString = (letterPiece) => {
    const alphabetsAndNumsAndSymbols = [
        ..."abcdefghijklmnopqrstuvwxyz",
        ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        ..."1234567890",
        ..."!#$%&'()=~|-^+*;:{}[]?<>,._"
    ];
    let text = "";
    for (let i = 0; i < letterPiece; i++) {
        text += randomChoice(alphabetsAndNumsAndSymbols);
    }
    return text;
};

module.exports = {
    intRandom,
    intRandoms,
    intRandomsNoRepeat,
    replacement,
    randomChoice,
    randomString
};

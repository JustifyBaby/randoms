var Random = /** @class */ (function () {
    function Random() {
    }
    ;
    Random.prototype.intRandom = function (min, max) {
        return Math.floor(Math.random() * (max + 1 - min) + min);
    };
    Random.prototype.randomChoice = function (array) {
        var rand = Math.floor(Math.random() * array.length);
        return array[rand];
    };
    Random.prototype.replacement = function () {
        var prevList = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            prevList[_i] = arguments[_i];
        }
        // result container
        var afterList = [];
        var after;
        while (prevList.length !== afterList.length) {
            after = this.randomChoice(prevList);
            if (afterList.includes(after)) {
                // if include skip --> don't do anything, and go to head.
                continue;
            }
            else {
                // if passed add.
                afterList.push(after);
            }
        }
        return afterList;
    };
    Random.prototype.intRandoms = function (min, max, piece) {
        var rands = [];
        for (var i_1 = 0; i_1 < piece; i_1++) {
            rands.push(this.intRandom(min, max));
        }
        return rands;
    };
    Random.prototype.intRandomsNoRepeat = function (min, max, piece) {
        if ((max - min) < piece) {
            throw new Error("Value Error! max-min < piece => I must be repeat!!");
        }
        var rands = [];
        while (rands.length !== piece) {
            var rand = this.intRandom(min, max);
            if (rands.includes(rand)) {
                continue;
            }
            else {
                rands.push(rand);
                console.log(rands.length);
            }
        }
        return rands;
    };
    return Random;
}());
var i = new Random();
console.log(i.intRandomsNoRepeat(1, 5, 4));

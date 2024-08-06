"use strict";
class Random {
  static integer(min, max) {
    return Math.floor(Math.random() * max + 1 - min) + min;
  }
  static choice(array) {
    return array[this.integer(0, array.length)];
  }
  static string(length) {
    const alphabets = [..."abcdefghijklmnopqrstuvwxyz"];
    const chars = [
      ...alphabets,
      ...alphabets.map((char) => char.toUpperCase()),
      ..."0123456789",
    ];
    let text = "";
    for (let i = 0; i < length; i++) {
      text += this.choice(chars);
    }
    return text;
  }
  static shuffle(prevList) {
    // result container
    let afterList = [];
    while (prevList.length !== afterList.length) {
      const choose = this.choice(prevList);
      if (afterList.includes(choose)) {
        // if include skip --> don't do anything, and go to head.
        continue;
      } else {
        // if passed add.
        afterList = [...afterList, choose];
      }
    }
    return afterList;
  }
  static pluralInts(min, max, piece) {
    let rands = [];
    for (let times = 0; times < piece; times++) {
      rands = [...rands, this.integer(min, max)];
    }
    return rands;
  }
  static pluralIntsNoRepeat(min, max, piece) {
    if (max - min < piece) {
      throw new Error("Value Error! max-min < piece => I must be repeat!!");
    }
    let rands = [];
    while (rands.length !== piece) {
      let rand = this.integer(min, max);
      if (rands.includes(rand)) {
        continue;
      } else {
        rands = [...rands, rand];
      }
    }
    return rands;
  }
}
module.exports = Random;

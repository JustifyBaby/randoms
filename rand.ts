// Random num from "min" to "max".
const rangeRandom =
  (min: number, max: number): number => Math.floor(Math.random() * (max + 1 - min) + min);

const randomChoice = <T>(array: T[]): T => {
  const rand: number = Math.floor(Math.random() * array.length);
  return array[rand];
};

// random changing
const replacement = <U>(...prevList: U[]): U[] => {
  // result container
  const afterList: U[] = [];
  let random: number;

  while (prevList.length !== afterList.length) {
    random = Math.floor(Math.random() * prevList.length);
    if (afterList.includes(prevList[random])) {
      // if include skip --> don't do anything, and go to head.
      continue;
    } else {
      // if passed add.
      afterList.push(prevList[random]);
    }
  }

  return afterList;
};

const rangeRandoms = (min: number, max: number, piece: number): number[] => {
  let rands: number[] = [];
  for (let times = 0; times < piece; times++) {
    rands.push(rangeRandom(min, max));
  }
  return rands;
};

const rangeRandomsNoRepeat = (min: number, max: number, piece: number): number[] | never => {
  if ((max - min) < piece) {
    throw new Error("Value Error! max-min < piece => I must be repeat!!");
  }
  const rands: number[] = [];
  while (rands.length !== piece) {
    let rand = rangeRandom(min, max);
    if (rands.includes(rand)) {
      continue;
    } else {
      rands.push(rand);
    }
  }
  return rands;
};

const randomString = (letterPiece: number) => {
  const alphabetsAndNumsAndSymbols: string[] = [
    ..."abcdefghijklmnopqrstuvwxyz",
    ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    ..."1234567890",
    ..."!#$%&'()=~|-^+*;:{}[]?<>,._"
  ];

  let text: string = "";
  for (let i = 0; i < letterPiece; i++) {
    text += randomChoice(alphabetsAndNumsAndSymbols);
  }

  return text;
};

module.exports = {
  rangeRandom,
  rangeRandoms,
  rangeRandomsNoRepeat,
  replacement,
  randomChoice,
  randomString
};
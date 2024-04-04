export class Random {
  constructor() { }

  rangeRandom(min: number, max: number): number {
    return Math.floor(Math.random() * (max + 1 - min) + min);
  }

  randomChoice<T>(array: T[]): T {
    const rand: number = Math.floor(Math.random() * array.length);
    return array[rand];
  }

  replacement<U>(...prevList: U[]): U[] {
    // result container
    const afterList: U[] = [];
    let after: U;

    while (prevList.length !== afterList.length) {
      after = this.randomChoice(prevList);
      if (afterList.includes(after)) {
        // if include skip --> don't do anything, and go to head.
        continue;
      } else {
        // if passed add.
        afterList.push(after);
      }
    }
    return afterList;
  }

  rangeRandoms(min: number, max: number, piece: number): number[] {
    let rands: number[] = [];
    for (let times = 0; times < piece; times++) {
      rands.push(this.rangeRandom(min, max));
    }
    return rands;
  }

  rangeRandomsNoRepeat(min: number, max: number, piece: number): number[] | never {
    if ((max - min) < piece) {
      throw new Error("Value Error! max-min < piece => I must be repeat!!");
    }
    const rands: number[] = [];
    while (rands.length !== piece) {
      let rand = this.rangeRandom(min, max);
      if (rands.includes(rand)) {
        continue;
      } else {
        rands.push(rand);
      }
    }
    return rands;
  }

  randomString(letterPiece: number): string {
    const alphabetsAndNumsAndSymbols: string[] = [
      ..."abcdefghijklmnopqrstuvwxyz",
      ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      ..."1234567890",
      ..."!#$%&'()=~|-^+*;:{}[]?<>,._"
    ];

    let text: string = "";
    for (let i = 0; i < letterPiece; i++) {
      text += this.randomChoice(alphabetsAndNumsAndSymbols);
    }

    return text;
  }
}

export class Random {
  constructor() { }

  intRandom(min: number, max: number): number {
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

  intRandoms(min: number, max: number, piece: number): number[] {
    let rands: number[] = [];
    for (let i = 0; i < piece; i++) {
      rands.push(this.intRandom(min, max));
    }
    return rands;
  }

  intRandomsNoRepeat(min: number, max: number, piece: number): number[] | never {
    if ((max - min) < piece) {
      throw new Error("Value Error! max-min < piece => I must be repeat!!");
    }
    const rands: number[] = [];
    while (rands.length !== piece) {
      let rand = this.intRandom(min, max);
      if (rands.includes(rand)) {
        continue;
      } else {
        rands.push(rand);
      }
    }
    return rands;
  }
}

import { Transition, Weather } from '../types/shared';

const Delay = (ms: number) => {
    return new Promise((res) => setTimeout(res, ms));
};

const uuid = (): string => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

export function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

export const now = (): number => {
  return Math.floor(Date.now() / 1000)
}

export const weightedElement = (input: Array<Transition>): Transition => {
  let i;

  const weights = []

  for (i=0; i<input.length; i++) {
    weights[i] = input[i].chance + (weights[i - 1] || 0)
  }

  const random = Math.random() * weights[weights.length - 1]

  return input[weights.findIndex(el => el > random)]
}


export const randomArrElement = (array: Weather[]): Weather => {
  return array[Math.floor(Math.random() * array.length)]
}

export const wait = (ms: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
}

export default Delay
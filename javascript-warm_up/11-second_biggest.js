#!/usr/bin/node

function findSecondBiggestIntegers(args) {
  if (args.length <= 2) {
    return 0;
  }

  let first = Number.MIN_SAFE_INTEGER;
  let second = Number.MIN_SAFE_INTEGER;

  for (const arg of args) {
    const num = parseInt(arg);
    if (num > first) {
      second = first;
      first = num;
    } else if (num > second && num < first) {
      second = num;
    }
  }

  return second;
}

const args = process.argv.slice(2);
const secondBiggest = findSecondBiggestIntegers(args);

console.log(secondBiggest);

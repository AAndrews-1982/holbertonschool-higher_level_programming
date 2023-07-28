#!/usr/bin/node
const firstArg = process.argv[2];

const parsedNumber = parseInt(firstArg, 10);
if (!isNaN(parsedNumber)) {
  console.log(`My number: ${parsedNumber}`);
} else {
  console.log("Not a number");
}

#!/usr/bin/node
const args = process.argv.slice(2);

if (args.length !== 2) {
  console.log("Usage: node script.js <arg1> <arg2>");
} else {
  const [arg1, arg2] = args;
  console.log(`${arg1} is ${arg2}`);
}

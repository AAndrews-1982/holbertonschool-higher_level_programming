#!/usr/bin/node

const Rectangle = require('./4-rectangle');

class Square extends Rectangle {
  constructor (size) {
    super(size, size);
  }

  charPrint (c) {
    if (c === undefined) {
      c = 'X';
    }
    for (let i = 0; i < this.height; i++) {
      console.log(c.repeat(this.width));
    }
  }
}

module.exports = Square;

// Test cases
const square1 = new Square(4);
square1.charPrint();

const square2 = new Square(4);
square2.charPrint('Z');

const square3 = new Square(5);
square3.charPrint();

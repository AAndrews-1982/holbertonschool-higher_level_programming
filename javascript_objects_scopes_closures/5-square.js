#!/usr/bin/node

class Rectangle {
  constructor (w, h) {
    if (w > 0 && h > 0) {
      this.width = w;
      this.height = h;
    } else {
      Object.assign(this, {});
    }
  }

  print () {
    for (let i = 0; i < this.height; i++) {
      console.log('X'.repeat(this.width));
    }
  }

  rotate () {
    [this.width, this.height] = [this.height, this.width];
  }

  double () {
    this.width *= 2;
    this.height *= 2;
  }
}

class Square extends Rectangle {
  constructor (size) {
    super(size, size);
  }
}

module.exports = Square;

// Test cases
const square1 = new Square(4);
square1.print();

const square2 = new Square(4);
square2.print();
square2.double();
square2.print();

const square3 = new Square(5);
square3.print();
square3.double();
square3.print();
square3.rotate();
square3.print();

const square4 = new Square(-4); // Will create an empty object
square4.print();

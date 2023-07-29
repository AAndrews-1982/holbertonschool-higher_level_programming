#!/usr/bin/node

class Rectangle {
  constructor(w, h) {
    if (w <= 0 || h <= 0 || typeof w !== 'number' || typeof h !== 'number') {
      return {};
    }

    this.width = w;
    this.height = h;
  }
}

const rectangle1 = new Rectangle(3, -3);
const rectangle2 = new Rectangle(3);
const rectangle3 = new Rectangle();

console.log(rectangle1);
console.log(rectangle2);
console.log(rectangle3);

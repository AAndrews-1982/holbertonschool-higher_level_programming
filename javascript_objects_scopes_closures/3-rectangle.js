#!/usr/bin/node

class Rectangle {
  constructor(w, h) {
    if (w <= 0 || h <= 0 || typeof w !== 'number' || typeof h !== 'number') {
      return {};
    }

    this.width = w;
    this.height = h;
  }

  print() {
    if (this.width <= 0 || this.height <= 0) {
      return;
    }

    for (let i = 0; i < this.height; i++) {
      console.log('X'.repeat(this.width));
    }
  }
}

const rectangle1 = new Rectangle(3, 5);
const rectangle2 = new Rectangle(0, 5);
const rectangle3 = new Rectangle(3, -3);
const rectangle4 = new Rectangle(3);
const rectangle5 = new Rectangle();

rectangle1.print();
rectangle2.print();
rectangle3.print();
rectangle4.print();
rectangle5.print();

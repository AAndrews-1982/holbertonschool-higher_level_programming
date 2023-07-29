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

  rotate() {
    [this.width, this.height] = [this.height, this.width];
  }

  double() {
    this.width *= 2;
    this.height *= 2;
  }
}

const rectangle1 = new Rectangle(3, 5);
const rectangle2 = new Rectangle(0, 5);
const rectangle3 = new Rectangle(3, -3);
const rectangle4 = new Rectangle(3);
const rectangle5 = new Rectangle();

rectangle1.print();
rectangle1.rotate();
rectangle1.print();
rectangle1.double();
rectangle1.print();

rectangle2.print();
rectangle2.rotate();
rectangle2.print();
rectangle2.double();
rectangle2.print();

rectangle3.print();
rectangle3.rotate();
rectangle3.print();
rectangle3.double();
rectangle3.print();

rectangle4.print();
rectangle4.rotate();
rectangle4.print();
rectangle4.double();
rectangle4.print();

rectangle5.print();
rectangle5.rotate();
rectangle5.print();
rectangle5.double();
rectangle5.print();

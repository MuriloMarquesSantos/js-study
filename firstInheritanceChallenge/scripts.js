const Rect = function(base, height) {
  this.base = base;
  this.height = height;
  this.getArea = function () {
      return this.base * this.height;
  }
};

function Square(side) {
    Rect.call(this, side, side);
}

Square.prototype = new Rect();

const square = new Square(4, 4);

alert(`The area of the Rect is ${square.getArea()} \n
Is square a instance of Rect? ${square instanceof Rect} \n
Is square a instance of Square? ${square instanceof Square} \n`);

function Circle(radius) {
  this.radius = radius;
}

Circle.prototype.getArea = function () {
  return Math.PI * Math.pow(this.radius, 2);
};
const newCicle = new Circle(10);

const anotherCircle = new Circle(20);

console.log(newCicle);
console.log(anotherCircle);

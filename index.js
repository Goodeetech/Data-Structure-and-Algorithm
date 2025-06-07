// console.log("hello world");

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} going at ${this.speed}km/h`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} going at ${this.speed}km/h`);
// };

// const car1 = new Car("BMW", 50);
// const car2 = new Car("Mercedes", 100);

// car1.accelerate();
// car2.accelerate();

// car1.brake();
// car2.brake();

// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} going at ${this.speed}`);
//   }

//   brake() {
//     this.speed -= 10;
//     console.log(`${this.make} going at ${this.speed}`);
//   }

//   get speedUS() {
//     return this.speed / 1.6;
//   }

//   set speedUS(speed) {
//     return (this._speed = speed * 1.6);
//   }
// }

// const car1 = new Car("BMW", 120);
// const car2 = new Car("Mercedes", 200);

// console.log(car1.speedUS);
// car1.accelerate();
// car1.brake();

// // car2.accelerate();
// // car2.brake();

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return item;
  }
  shift() {
    const firstItem = this.data[0];

    for (let i = 0; i < this.data.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return firstItem;
  }

  unshift(item) {
    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[0] = item;

    this.length++;
  }
  insert(index, item) {
    for (let i = this.length; i >= index; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[index] = item;
    this.length++;
  }

  deleteByIndex(index) {
    const itemWithIndex = this.data[index]; // Save the item you’re about to delete

    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1]; // Shift everything left
    }

    delete this.data[this.length - 1]; // Delete the last duplicate
    this.length--; // Decrease the length of your array

    return itemWithIndex; // Return the deleted item
  }
}

const myNewArray = new MyArray();
myNewArray.push("food");
myNewArray.push("Amala");
myNewArray.push("Asharo");
console.log(myNewArray);
myNewArray.unshift("alausa");
myNewArray.insert(1, "goods");
console.log(myNewArray);

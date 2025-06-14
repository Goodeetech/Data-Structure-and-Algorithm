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

// class MyArray {
//   constructor() {
//     this.length = 0;
//     this.data = {};
//   }
//   push(item) {
//     this.data[this.length] = item;
//     this.length++;
//     return item;
//   }
//   pop() {
//     const lastItem = this.data[this.length - 1];
//     delete this.data[this.length - 1];
//     this.length--;
//     return lastItem;
//   }
//   shift() {
//     const firstItem = this.data[0];

//     for (let i = 0; i < this.data.length; i++) {
//       this.data[i] = this.data[i + 1];
//     }
//     delete this.data[this.length - 1];
//     this.length--;
//     return firstItem;
//   }

//   unshift(item) {
//     for (let i = this.length; i > 0; i--) {
//       this.data[i] = this.data[i - 1];
//     }
//     this.data[0] = item;

//     this.length++;
//   }
//   insert(index, item) {
//     for (let i = this.length; i >= index; i--) {
//       this.data[i] = this.data[i - 1];
//     }
//     this.data[index] = item;
//     this.length++;
//   }

//   deleteByIndex(index) {
//     const itemWithIndex = this.data[index]; // Save the item you’re about to delete

//     for (let i = index; i < this.length; i++) {
//       this.data[i] = this.data[i + 1]; // Shift everything left
//     }

//     delete this.data[this.length - 1]; // Delete the last duplicate
//     this.length--; // Decrease the length of your array

//     return itemWithIndex; // Return the deleted item
//   }
// }

// const myNewArray = new MyArray();
// myNewArray.push("food");
// myNewArray.push("Amala");
// myNewArray.push("Asharo");
// console.log(myNewArray);
// myNewArray.unshift("alausa");
// myNewArray.insert(1, "goods");
// myNewArray.pop();
// console.log(myNewArray);

// ////STRING
// const reverseString = (str) => str.split("").reverse().join("");

// console.log(reverseString("hello"));
// console.log(reverseString("Goodee"));

// const checkPalindrome = (str) => {
//   const string = str.split("").reverse().join("");
//   if (string === str) {
//     console.log("Palindrome");
//   } else {
//     console.log("Not A Palindrome");
//   }
// };

// checkPalindrome("hello");
// checkPalindrome("abba");

// const reverseInt = (str) => {
//   const num = str.toString().split("").reverse().join("");
//   const reversedNum = parseInt(num) * Math.sign(str);
//   return reversedNum;
// };

// console.log(reverseInt(1234));

// const fizzBuzz1 = (firstNum, lastNum) => {
//   for (let i = firstNum; i <= lastNum; i++) {
//     if (i % 5 == 0 && i % 3 == 0) {
//       console.log("fizzBuzz");
//     } else if (i % 5 == 0) {
//       console.log("Buzz");
//     } else if (i % 3 == 0) {
//       console.log("Fizz");
//     } else {
//       console.log(i);
//     }
//   }
// };

// const fizzBuzz = (firstNum, lastNum) => {
//   for (let i = firstNum; i <= lastNum; i++) {
//     if (i % 5 == 0 && i % 3 == 0) {
//       console.log("fizzBuzz");
//     } else if (i % 5 == 0) {
//       console.log("Buzz");
//     } else if (i % 3 == 0) {
//       console.log("Fizz");
//     } else {
//       console.log(i);
//     }
//   }
// };

// fizzBuzz(1, 20);

// const chunk = (array, size) => {
//   const chunked = [];
//   let index = 0;

//   while (index < array.length) {
//     const chunk = array.slice(index, index + size);
//     chunked.push(chunk);
//     index += size;
//   }
//   return chunked;
// };

// console.log(chunk([1, 2, 3, 4, 5, 6, 7], 3));

// const findIndex = (array, target) => {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[i] + array[j] === target) {
//         return [i, j]; // return the indexes
//       }
//     }
//   }
//   return null; // If no match found
// };

// console.log(findIndex([2, 3, 6, 8, 11, 15], 9)); // ➜ [0, 1]

// //Linked List

// class Node {
//   constructor(value) {
//     this.head = value;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor(value) {
//     this.head = new Node(value);
//     this.tail = this.head;
//     this.length = 1;
//   }
//   push(value) {
//     const newNode = new Node(value);
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = newNode;
//     }
//     this.tail.next = newNode;
//     this.tail = newNode;
//     this.length++;
//   }
//   pop() {
//     if (!this.head) {
//       return undefined;
//     }
//     let temp = this.head;
//     let prev = this.head;

//     while (temp.next) {
//       prev = temp;
//       temp = prev.next;
//     }

//     this.tail = prev;
//     this.tail.next = null;
//     this.length--;

//     if (this.length === 0) {
//       this.head = null;
//       this.tail = null;
//     }
//     return temp;
//   }
//   unshift(value) {
//     const newNode = new Node(value);

//     if (!this.head) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       newNode.next = this.head;
//       this.head = newNode;
//     }

//     this.length++;
//     return this;
//   }
//   shift() {
//     if (!this.head) {
//       return undefined;
//     }
//     const newHead = this.head.next;
//     const removedNode = this.head;
//     if (this.length == 0) {
//       this.tail = null;
//     }

//     this.head = newHead;
//     this.length--;
//     return removedNode;
//   }
//   getFirst() {
//     if (!this.head) {
//       return undefined;
//     }
//     return this.head;
//   }
//   getLast() {
//     if (!this.head) {
//       return undefined;
//     }
//     let temp = this.head;

//     while (temp.next) {
//       temp = temp.next;
//     }
//     return temp;
//     // return this.tail || undefined;
//   }
//   get(index) {
//     let counter = 0;
//     let temp = this.head;
//     while (temp) {
//       if (counter == index) {
//         return temp;
//       }

//       counter++;
//       temp = temp.next;
//     }
//     return null;
//   }

//   set(index, value) {
//     let counter = 0;
//     let temp = this.head;

//     while (temp) {
//       if (counter === index) {
//         temp.value = value;
//         return true;
//       }
//       temp = temp.next;
//       counter++;
//     }
//     return false;
//   }

//   insert(index, value) {
//     const newNode = new Node(value);

//     if (index == 0) {
//       newNode.next = this.head;
//       this.head = newNode;
//       this.length++;
//       return true;
//     }
//     if (index == this.length) {
//       this.length++;
//       return this.push(value);
//     }

//     let temp = this.head;
//     let counter = 0;

//     while (temp && counter < index - 1) {
//       temp = temp.next;
//       counter++;
//     }
//     if (!temp) return false;
//     newNode.next = temp.next;
//     temp.next = newNode;
//     this.length++;
//     return true;
//   }
//   size() {
//     let temp = this.head;
//     let counter = 0;

//     if (!temp) {
//       return undefined;
//     }

//     while (temp) {
//       temp = temp.next;
//       counter++;
//     }
//     return counter;
//   }
//   clear() {
//     this.head = null;
//   }
//   reverse() {
//     let temp = this.head;

//     this.head = this.tail;
//     this.tail = temp;
//     let next = temp;
//     let prev = null;

//     for (let i = 0; i < this.length; i++) {
//       next = temp.next;
//       temp.next = prev;
//       prev = temp;
//       temp = next;
//     }
//   }
// }

// const myNewLinkedList = new LinkedList(1);
// myNewLinkedList.push(10);
// myNewLinkedList.push(20);
// myNewLinkedList.push(30);
// myNewLinkedList.reverse();
// console.log(myNewLinkedList);

// class Node {
//   constructor(value) {
//     this.head = value;
//     this.next = null;
//     this.prev = null;
//   }
// }

// class DoublyLinkedList {
//   constructor(value) {
//     this.head = new Node(value);
//     this.tail = this.head;
//     this.length = 1;
//   }
//   push(value) {
//     const newNode = new Node(value);
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       this.tail.next = newNode;
//       newNode.prev = this.tail;
//       this.tail = newNode;
//     }
//     this.length++;
//     return this;
//   }
//   pop() {
//     if (!this.tail) {
//       return undefined;
//     }
//     let temp = this.tail;
//     if (this.length === 1) {
//       this.head = null;
//       this.tail = null;
//     } else {
//       this.tail = temp.prev;
//       this.tail.next = null;
//       temp.prev = null;
//     }

//     this.length--;
//     return temp;
//   }

//   unshift(value) {
//     const newNode = new Node(value);
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       newNode.next = this.head;

//       this.head.prev = newNode;
//       this.head = newNode;
//     }
//     this.length++;
//     return this;
//   }
//   shift() {
//     const temp = this.head;
//     if (!this.head) {
//       return undefined;
//     }
//     if (this.length === 1) {
//       this.head = null;
//       this.tail = null;
//     } else {
//       temp.next.prev = null;
//       this.head = temp.next;
//       temp.next = null;
//     }
//     this.length--;
//     return temp;
//   }
// }

// const myNewDoublyList = new DoublyLinkedList(1);
// myNewDoublyList.push(10);
// myNewDoublyList.push(20);
// myNewDoublyList.push(30);
// myNewDoublyList.push(40);
// myNewDoublyList.pop();
// myNewDoublyList.unshift(20);
// myNewDoublyList.shift();

// console.log(myNewDoublyList);

////////////STACK //////////////////

///LIFO////

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class Stack {
//   constructor(value) {
//     const newNode = new Node(value);
//     this.first = newNode;
//     this.length = 1;
//   }
//   push(value) {
//     const newNode = new Node(value);
//     if (!this.first) {
//       this.first = newNode;
//     } else {
//       newNode.next = this.first;
//       this.first = newNode;
//     }
//     this.length++;
//     return this;
//   }
//   pop() {
//     const temp = this.first;
//     if (!this.first) {
//       return undefined;
//     }
//     if (this.length === 1) {
//       this.first = null;
//       this.length--;
//     } else {
//       this.first = this.first.next;
//       temp.next = null;
//     }
//     this.length--;
//     return temp;
//   }
//   min() {
//     let current = this.first;
//     let minValue = current.value;

//     while (current.next) {
//       current = current.next;

//       if (current.value < minValue) {
//         minValue = current.value;
//       }
//     }
//     return minValue;
//   }
// }

// const theStack = new Stack(20);
// theStack.push(50);
// theStack.push(40);
// theStack.pop();
// console.log(theStack);
// console.log(theStack.min());

//////////QUEUE //////

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class Queue {
//   constructor(value) {
//     const newNode = new Node(value);
//     this.first = newNode;
//     this.last = newNode;
//     this.length = 1;
//   }
//   enqueue(value) {
//     const newNode = new Node(value);
//     let temp = this.last;
//     if (!this.first) {
//       this.first = newNode;
//       this.last = newNode;
//     } else {
//       temp.next = newNode;
//       this.last = newNode;
//     }
//     this.length++;
//     return this;
//   }

//   dequeue() {
//     if (!this.first) return undefined;

//     const temp = this.first;

//     if (this.length === 1) {
//       this.first = null;
//       this.last = null;
//     } else {
//       this.first = this.first.next;
//     }

//     this.length--;
//     return temp;
//   }
// }

// const myQueue = new Queue(10);

// myQueue.enqueue(40);
// myQueue.enqueue(50);
// myQueue.enqueue(60);
// myQueue.dequeue();

// console.log(myQueue);

//

//////////////////HASH-TABLE /////////////////

// class HashTable {
//   constructor(size = 5) {
//     this.keyMap = new Array(size);
//   }

//   _hashFunction(key) {
//     let sum = 0;
//     const PRIME_NUMBER = 31;

//     for (let i = 0; i < Math.min(key.length, 100); i++) {
//       const charCode = key.charCodeAt(i) - 96;
//       sum = (sum * PRIME_NUMBER + charCode) % this.keyMap.length;
//     }
//     return sum;
//   }
//   set(key, value) {
//     const index = this._hashFunction(key);
//     if (!this.keyMap[index]) {
//       this.keyMap[index] = [];
//     }
//     this.keyMap[index].push([key, value]);
//     return this;
//   }

//   get(key) {
//     const index = this._hashFunction(key);
//     if (this.keyMap[index]) {
//       for (let i = 0; i < this.keyMap[index].length; i++) {
//         if (this.keyMap[index][i][0] === key) {
//           return this.keyMap[index][i][1];
//         }
//       }
//     }
//     return undefined;
//   }
//   getAllKeys() {
//     let allKey = [];
//     for (let i = 0; i < this.keyMap.length; i++) {
//       if (this.keyMap[i]) {
//         for (let j = 0; j < this.keyMap[i].length; j++) {
//           allKey.push(this.keyMap[i][j][0]);
//         }
//       }
//     }
//     return allKey;
//   }
//   getAllValues() {
//     const allValues = [];
//     for (let i = 0; i < this.keyMap.length; i++) {
//       if (this.keyMap[i]) {
//         for (let j = 0; j < this.keyMap[i].length; j++) {
//           allValues.push(this.keyMap[i][j][1]);
//         }
//       }
//     }
//     return allValues;
//   }
// }

// const myPhoneBook = new HashTable();

// myPhoneBook.set("Tomi", 5555552222);
// myPhoneBook.set("Tobi", 555555333333);
// myPhoneBook.set("Tolu", 5555554444);
// myPhoneBook.set("Tomiwa", 5555557777);
// console.log(myPhoneBook);
// console.log(myPhoneBook.getAllKeys());
// console.log(myPhoneBook.getAllValues());

const text = "Hello my name name name is huxn";

const getValues = (str) => {
  const values = {};

  str.split(" ").forEach((item) => {
    if (values[item]) {
      values[item] = values[item] + 1;
    } else {
      values[item] = 1;
    }
  });
  return values;
};

console.log(getValues(text));

function twoSum(nums, target) {
  const numMap = {};

  for (let i = 0; i < nums.length; i++) {
    const compliment = target - nums[i];

    if (compliment in numMap && numMap[compliment] !== i) {
      return [numMap[compliment], i];
    }

    numMap[nums[i]] = i;
  }
  return [];
}

const num = [2, 7, 11, 15];

const target = 9;
const result = twoSum(num, target);
console.log(result);

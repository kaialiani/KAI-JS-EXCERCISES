import { Cat } from "./Cat.js";
import { Car } from "./Car.js";

//Create a javascript function that takes firstname and lastname as 2 parameters and uses console.log() to output the person's name. Check that it works and is printed correctly;

function add(a, b) {
  return a + b;
}

const firstName = "Kai";
const lastName = "Aliani";

const fullName = add(firstName, lastName);
console.log(fullName);

//Create a function that calculates the area of a rectangle. The function should return the result. Test that it works.

const base = 4;
const altezza = 6;

function calculateArea() {
  return base * altezza;
}

console.log(calculateArea());

//Create a function that takes speed and time as 2 parameters and calculates and returns the distance. Use the function to test that it works by using the 'log' again. Print out "You have travelled *x* km" where *x* is replaced by the result from the function.

function calculateDistance(speed, time) {
  const distance = speed * time;
  console.log("you have travelled " + distance + " km");
}

calculateDistance(50, 20);
calculateDistance(70, 10);

//Create an object called calculator with the name of the owner (eg. Your name) and modify your code so the 3 previous functions are attached to the object.

const calculator = {
  owner: "Kai ",
  add: add,
  calculateArea: calculateArea,
  calculateDistance: calculateDistance,
};

const calculatorName = calculator.add(firstName, lastName);
console.log(calculatorName);

const theBase = 4;
const height = 6;
console.log(calculator.calculateArea(theBase, height));

calculator.calculateDistance(50, 20);
calculator.calculateDistance(70, 10);

//CAT EXCERCISE
const theCat = new Cat("Pongo", "Red", "Red breed lol");
console.log(theCat.getCatData());

theCat.changeName("Rudolph");
console.log(theCat.getCatData());

//CAR EXCERCISE
const carA = new Car("Fiat", "500", 2016);
const carB = new Car("Smart", "Fortwo", 2000);

console.log(carA.getCarInfo());
console.log(carA.start());
console.log(carA.stop());

console.log(carB.getCarInfo());
console.log(carB.start());
console.log(carB.stop());

//ARRAY EXCERCISE

const names = ["Kai", "Giulia", "Victor", "Tiziana", "Alfonso"];
console.log(names[0]);

const indexOfVictor = names.indexOf("Victor");
console.log(indexOfVictor);

const indexOfFrank = names.indexOf("Frank");
console.log(indexOfFrank);

names.push("Christian");
console.log(names);

const firstThreeNames = names.slice(0, 3);
console.log(firstThreeNames);

const personA = {
  firstname: "Fabian",
  lastname: "Gang",
  email: "fabiangang@gmail.com",
};

const personB = {
  firstname: "Mads",
  lastname: "Mikkelsen",
  email: "mads.mikkelsen@outlook.com",
};

const people = [personA, personB];
console.log(people);

console.log(people[0].email);

//OBJECTS AND ARRAY EXCERCISE

// Define a Student object with properties: name, id, and grades (an array of numbers)
const student = {
  name: "Kai Aliani",
  id: 22,
  grades: [],
};

function addGrade(student, grade) {
  student.grades.push(grade);
}

function updateStudentName(student, newName) {
  student.name = newName;
}

addGrade(student, 10);
addGrade(student, 12);
addGrade(student, 4);

updateStudentName(student, "Franco");

console.log(student);

// importing modules
import University from "./university.js";
import User from "./user.js";
import Student from "./student.js";
import Worker from "./worker.js";

// creating instances of the University class

const lnu = new University(
  "Ivan Franko National University of Lviv",
  "Lviv",
  79000
);

const lpu = new University(
  "Lviv Polytechnic National University",
  "Lviv",
  79000
);

const hogwarts = new University(
  "Hogwarts School of Witchcraft and Wizardry",
  "Dufftown",
  1234
);

// Examples of working with the instances
lnu.setZipCode(79001);
console.log(hogwarts.getZipCode());
lnu.setName("Some other name");
console.log(lpu.getAddress());
lpu.setCity("Lvivv");

//Creating an instance of the User Class:

const john = new User("John", "Snow", 2020);

//examples of working with the User class:

john.setSurname("Targaryen");
john.setBDate(1992);

console.log(john.getName());
console.log(john.getFullName());
console.log(john.getFullInfo());

// creating inctances of a Student class:

const arya = new Student("Arya", "Stark", 1998, 2019, lpu);
const rob = new Student("Rob", "Stark", 1991, 2016, lnu);
const sansa = new Student("Sansa", "Stark", 1994, 2018);

//examples of working with the Student class:

sansa.setSurname("Bolton");
sansa.setUniversity(hogwarts);
arya.setYear(1995);
rob.setName("Robb");
console.log(sansa.getYear());
console.log(sansa.getCourse());
console.log(sansa.getFullName());

// creating instances of the Worker class

const cersei = new Worker("Cersei", "Lannister", 1990, 100, 30, false);
const robert = new Worker("Robert", "Baratheon", 1990, 50, 17);
const tyrion = new Worker("Tyrion", "Lannister", 1992, 10, 31, false);

// examples of working with the class:
cersei.setRetired(true);
tyrion.setRate(25);
robert.setRetired(true);
robert.setDays(76);

console.log(cersei.getFullName());
console.log(cersei.isRetired());
console.log(cersei.getSalary());
console.log(tyrion.getRate());
console.log(robert.isRetired());

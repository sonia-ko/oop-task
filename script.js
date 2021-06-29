class University {
  constructor(name, city, zipCode) {
    this.name = name;
    this.city = city;
    this.zipCode = zipCode;
  }
  getAddress() {
    return `"${this.name}" - ${this.city.toUpperCase()}, ${this.zipCode}`;
  }

  // setters functions

  setName(univName) {
    this.name = univName;
  }

  setCity(city) {
    this.city = city;
  }

  setZipCode(code) {
    this.zipCode = code;
  }

  //getters functions

  getName() {
    return this.name;
  }

  getCity() {
    return this.city;
  }

  getZipCode() {
    return this.zipCode;
  }

  // name validation
  set name(univName) {
    if (univName.length > 128) {
      console.error(
        "The name of the university should be less than 128 characters long. Please double-check it."
      );
    } else if (!/^[-\sa-zA-Z]+$/.test(univName)) {
      console.error(
        "The name of the university can include only letters, spaces or hyphens. Please double-check it."
      );
    } else {
      this._name = univName;
    }
  }

  get name() {
    return this._name;
  }

  // zip code validation
  set zipCode(code) {
    if (code.toString().length <= 5 && /^\d+$/.test(code.toString())) {
      this._zipCode = code;
    } else {
      console.error(
        "The code should be less than 5 digits long and include only digits"
      );
    }
  }

  get zipCode() {
    return this._zipCode;
  }
}

const lnu = new University(
  "Ivan Franko National University of Lviv",
  "Lviv",
  "6789"
);

const lpu = new University(
  "Lviv Polytechnic National University",
  "Lviv",
  "7900"
);

// lnu.setZipCode("jhdj");
// lnu.setCity(123);
// lnu.setName("Some other name");
// console.log(lnu.getName());

class User {
  static currentYear = new Date().getFullYear();
  static minYear = 1990;

  constructor(name, surname, bDate) {
    this._name = name;
    this._surname = surname;
    this._bDate = bDate;
  }

  // setters functions

  setName(name) {
    this._name = name;
  }

  setSurname(surname) {
    this._surname = surname;
  }

  setBDate(date) {
    this._bDate = date;
  }

  // getters functions

  getName() {
    return this._name;
  }

  getSurname() {
    return this._surname;
  }

  getBDate() {
    return this._bDate;
  }

  //other functions

  getFullName() {
    return `${this._name} ${this._surname}`;
  }

  getFullInfo() {
    return `${this._name} ${this._surname} , ${this._bDate}`;
  }

  // name validation
  set _name(name) {
    if (/^[ A-Za-z-]*$/i.test(name) && name.length <= 32) {
      this.__name = name;
    } else {
      console.error(
        "The name should include only letters and hyphens. Maximum length is 32."
      );
    }
  }

  get _name() {
    return this.__name;
  }

  // surname validation
  set _surname(surname) {
    if (/^[ A-Za-z-]*$/i.test(surname) && surname.length <= 64) {
      this.__surname = surname;
    } else {
      console.error(
        "The surname should include only letters and hyphens. Maximum length is 64."
      );
    }
  }

  get _surname() {
    return this.__surname;
  }

  //birth year validation
  set _bDate(year) {
    if (
      year.toString().length <= 4 &&
      /^\d+$/.test(year.toString()) &&
      year <= User.currentYear &&
      year >= User.minYear
    ) {
      this.__bDate = year;
    } else {
      console.error(
        `The birth year should be less than 4 digits long and include only digits. The latest year that can be indicated should be within the range of: ${User.minYear} - ${User.currentYear}`
      );
    }
  }

  get _bDate() {
    return this.__bDate;
  }
}

const johnSnow = new User("John", "Snow", 2020);

// console.log(johnSnow.getFullInfo());
// johnSnow.setSurname("NNNNNNNNNNNNNNNNNNNNNNNNNNNNNN898");
// console.log(johnSnow.getName());

class Student extends User {
  static counter = 0;
  static minEntryYear = 1900;

  constructor(
    name,
    surname,
    bDate,
    year,
    university = "no info about the university"
  ) {
    super(name, surname, bDate);
    Student.counter++;
    this._year = year;
    this._university = university;
  }

  static updateCounter() {
    ++counter;
  }

  // setter functions

  setYear(year) {
    this._year = year;
  }

  setUniversity(univ) {
    this._university = university;
  }

  // getter functions

  getYear() {
    return this._year;
  }

  getUniversity() {
    return this._university;
  }

  getCourse() {
    let course = User.currentYear - this.#year;
    return course < 6
      ? course
      : `${this.getFullName()} is not a student anymore 👩🏻‍🎓`;
  }

  getFullInfo() {
    return `${this.getFullName()}, ${
      this._university.name ?? this._university
    }, ${this._year}`;
  }
  static getCounter() {
    return this.counter;
  }

  // other functions

  isFinished() {
    return User.currentYear - this.#year < 6 ? false : true;
  }

  //university validation
  set _university(university) {
    if (!university) return;

    if (university instanceof University) {
      this.__university = university;
    } else {
      console.error(`${university} is not a valid university`);
      this.__university = "No info about the university";
    }
  }

  get _university() {
    return this.__university;
  }

  // starter year validation
  _setYear(year) {
    if (
      year.toString().length <= 4 &&
      /^\d+$/.test(year.toString()) &&
      year <= User.currentYear &&
      year >= Student.minEntryYear
    ) {
      this.#year = year;
    } else {
      console.error(
        `The starter year should be less than 4 digits long and include only digits. The latest year that can be indicated should be within the range of: ${Student.minEntryYear} - ${User.currentYear}`
      );
    }
  }
}

let kpu = "Kyiv Politech University";

const arya = new Student("Arya", "Stark", 1998, 2019, lpu);
const rob = new Student("Rob", "Stark", 1991, 2016, lnu);
const sansa = new Student("Sansa", "Stark", 1994, 2018);

class Worker extends User {
  static counter = 0;

  constructor(name, surname, bDate, rate, days, retired = false) {
    super(name, surname, bDate);
    Worker.counter++;
    this._days = days;
    this._retired = retired;
    this._rate = rate;
  }

  isRetired() {
    return this._retired;
  }

  getSalary() {
    return this._retired ? "0" : this._rate * this._days;
  }

  getDays() {
    return this._days;
  }

  getRate() {
    return this._rate;
  }

  setRetired(retirement) {
    this._retired = retirement;
  }

  set _rate(rate) {
    /^\d+$/.test(rate.toString())
      ? (this.__rate = rate)
      : console.error("The rate should include the numbers only 💰");
  }

  get _rate() {
    return this.__rate;
  }

  set _days(days) {
    /^\d+$/.test(days.toString())
      ? (this.__days = days)
      : console.error("The paramether days should include the numbers only 📅");
  }

  get _days() {
    return this.__days;
  }
}

const cersei = new Worker("Cersei", "Lannister", 1990, 100, 30);
console.log(cersei);
console.log(cersei.getFullName());
console.log(cersei.isRetired());
console.log(cersei.getSalary());
console.log(cersei.getRate());
cersei.setRetired(true);
console.log(cersei.isRetired());

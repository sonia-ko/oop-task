class University {
  constructor(name, city, zipCode) {
    this.name = name;
    this.city = city;
    this.zipCode = zipCode;
  }
  getAddress() {
    return `"${this.name}" - ${this.city.toUpperCase()}, ${this.zipCode}`;
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

class User {
  // # for properties currently works on Google Chrome and Edge. But it does not work in all modern browsers for now. For older browsers support, we will use _ instead of #.
  // Regular setters and getters cannot be used to set the private properties, that is why I have used private methods to set them.
  // For the private methods, I have used _ instead of # because # does not work for methods yet. Hope that it will be implemented soon :)

  #name;
  #surname;
  #bDate;
  static currentYear = new Date().getFullYear();
  static minYear = 1990;

  constructor(name, surname, bDate) {
    this._setName(name);
    this._setSurname(surname);
    this._setBirthYear(bDate);
  }

  getFullName() {
    return `${this.#name} ${this.#surname}`;
  }

  getFullInfo() {
    return `${this.#name} ${this.#surname} , ${this.#bDate}`;
  }

  // name validation
  _setName(name) {
    if (/^[ A-Za-z-]*$/i.test(name) && name.length <= 32) {
      this.#name = name;
    } else {
      console.error(
        "The name should include only letters and hyphens. Maximum length is 32."
      );
    }
  }

  // surname validation
  _setSurname(surname) {
    if (/^[ A-Za-z-]*$/i.test(surname) && surname.length <= 64) {
      this.#surname = surname;
    } else {
      console.error(
        "The surname should include only letters and hyphens. Maximum length is 64."
      );
    }
  }

  //birth year validation
  _setBirthYear(year) {
    if (
      year.toString().length <= 4 &&
      /^\d+$/.test(year.toString()) &&
      year <= User.currentYear &&
      year >= User.minYear
    ) {
      this.#bDate = year;
    } else {
      console.error(
        `The birth year should be less than 4 digits long and include only digits. The latest year that can be indicated should be within the range of: ${User.minYear} - ${User.currentYear}`
      );
    }
  }
}

const johnSnow = new User("John", "Snow", 2020);

console.log(johnSnow.getFullInfo());

class Student extends User {
  static counter = 0;
  #year;
  #university;
  constructor(name, surname, bDate, year, university) {
    super(name, surname, bDate);
    Student.counter++;
    // _setYear();
    this.#year = year;
    // _setUniversity();
    this.#university = university;
  }

  static updateCounter() {
    ++counter;
  }

  getCourse() {
    let course = User.currentYear - this.#year;
    return course < 6
      ? course
      : `${this.getFullName()} is not a student anymore 🙋🏻‍♀️`;
  }

  isFinished() {
    return User.currentYear - this.#year < 6 ? false : true;
  }

  getFullInfo() {
    return `${this.getFullName()}, ${this.#university.name}, ${this.#year}`;
  }

  static getCounter() {
    return this.counter;
  }

  _setUniversity() {}

  _setYear() {}
}

let arya = new Student("Arya", "Stark", 1998, 2019, lnu);
let rob = new Student("Rob", "Stark", 1991, 2016, lnu);
console.log(arya);

console.log(arya.getCourse());
console.log(arya.isFinished());
console.log(Student.getCounter());
console.log(arya.getFullInfo());

import User from "./user.js";
import University from "./university.js";

export default class Student extends User {
  static counter = 0;
  static minEntryYear = 1900;

  constructor(
    name,
    surname,
    bDate,
    year,
    university = "No info about the university"
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
    let course = User.currentYear - this._year;
    return course < 6
      ? course + 1
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
    return User.currentYear - this._year < 6 ? false : true;
  }

  //university validation
  set _university(university) {
    if (!university) return;

    if (university instanceof University) {
      this.__university = university;
    } else if (university === "No info about the university") {
    } else {
      console.error(`${university} is not a valid university`);
      this.__university = "No info about the university";
    }
  }

  get _university() {
    return this.__university;
  }

  // starter year validation
  set _year(year) {
    if (
      year.toString().length <= 4 &&
      /^\d+$/.test(year.toString()) &&
      year <= User.currentYear &&
      year >= Student.minEntryYear
    ) {
      this.__year = year;
    } else {
      console.error(
        `The starter year should be less than 4 digits long and include only digits. The latest year that can be indicated should be within the range of: ${Student.minEntryYear} - ${User.currentYear}`
      );
    }
  }

  get _year() {
    return this.__year;
  }
}

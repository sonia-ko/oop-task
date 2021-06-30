/**
 * a module that represents a class Student
 * @module Student
 */

import User from "./user.js";
import University from "./university.js";

/**
 * Student is a class that represents a student.
 * @class
 * @constructor
 * @public
 * @augments User
 */

export default class Student extends User {
  static counter = 0;
  static minEntryYear = 1900;

  /**
   * @constructor
   * @param {string} name - The name of the student. Can contain only letters, spaces and hyphens. The maximum length is 32 symbols.Inherited from the parent User class.
   * @param {string} surname - The surname of the student. Can contain only letters, spaces and hyphens. The maximum length is 64 symbols. Inherited from the parent User class.
   * @param {(string|number)} bDate - The student's year of birth. The maximum number of digits is 4. The year should be within the range of 1990 - current year. Inherited from the parent User class.
   * @param {(string|number)} year - the year of entering the university. The year should be within the range of 1990 - current year.
   * @param {object} [university=No info about the university] - the name of the university. Should be an instance of the University class.
   */
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

  /**
   * A method that checks how many instances of the class Student were created.
   * @static
   */
  static updateCounter() {
    ++counter;
  }

  // setter functions

  /**
   * A public method that allows to set the year of entering the university.
   * @interface
   * @param {(string|number)} year - the year of entering the university
   */
  setYear(year) {
    this._year = year;
  }

  /**
   * A public method that allows to set the name of the university that the person had entered.
   * @interface
   * @param {string} univ - the name of the university
   */
  setUniversity(univ) {
    this._university = univ;
  }

  // getter functions

  /**
   * A public method that allows to get the year when the person had entered the university
   * @interface
   * @returns {(string|number)} - the year of entering the university
   */
  getYear() {
    return this._year;
  }

  /**
   * A public method that allows to get the name of the university a person had entered
   * @interface
   * @returns {string} - the name of the university
   */
  getUniversity() {
    return this._university;
  }

  /**
   * A public method that allows to check the student's year at the university.
   * @interface
   * @returns {number} - the year at the university
   */
  getCourse() {
    let course = User.currentYear - this._year + 1;
    return course < 6
      ? course
      : `${this.getFullName()} is not a student anymore 👩🏻‍🎓`;
  }

  /**
   * A public method that allows to check the  full name of the student along with the year of entering the university
   * @interface
   * @returns {number} - the year at the university
   */
  getFullInfo() {
    return `${this.getFullName()}, ${
      this._university.name ?? this._university
    }, ${this._year}`;
  }

  /**
   * A static method that allows to check the number of instances.
   * @interface
   * @static
   * @returns {number} - the number of inctances
   */
  static getCounter() {
    return this.counter;
  }

  // other functions

  /**
   * A public method that allows to check whether the person has finished the university.
   * @interface
   * @returns {boolean} - true if the person has finished the university. Otherwise, false.
   */
  isFinished() {
    return User.currentYear - this._year < 6 ? false : true;
  }

  //university validation

  /**
   * @type {object} - the setter used to validate whether the university is an instance of the University class.
   */
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
  /**
   * @type {(string|number)} - the setter used to validate the year of entering the university.
   */
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

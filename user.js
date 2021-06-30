/**
 * a module that represents a class User
 * @module User
 */

/**
 * User is a class that represents a user.
 * @class
 * @constructor
 * @public
 */
export default class User {
  static currentYear = new Date().getFullYear();
  static minYear = 1990;

  constructor(name, surname, bDate) {
    /**
     * @constructor
     * @interface
     * @param {string} name - The name of the user. Can contain only letters, spaces and hyphens. The maximum length is 32 symbols.
     * @param {string} surname - The surname of the user. Can contain only letters, spaces and hyphens. The maximum length is 64 symbols.
     * @param {(string|number)} bDate - The user's year of birth. The maximum number of digits is 4. The year should be within the range of 1990 - current year.
     */

    this._name = name;
    this._surname = surname;
    this._bDate = bDate;
  }

  // setters functions

  /**
   * A public method that allows to set the first name of the user.
   * @interface
   * @param {string} name - the name of the user
   */
  setName(name) {
    this._name = name;
  }

  /**
   * A public method that allows to set the last name of the user.
   * @interface
   * @param {string} surname - the last name of the user
   */
  setSurname(surname) {
    this._surname = surname;
  }

  /**
   * A public method that allows to set the birth year of the user.
   * @interface
   * @param {(string|number)} date
   */
  setBDate(date) {
    this._bDate = date;
  }

  // getters functions

  /**
   * A public method that allows to get the first name of the user
   * @interface
   * @returns {string} - the first name of the user
   */
  getName() {
    return this._name;
  }

  /**
   * A public method that allows to get the last name of the user
   * @interface
   * @returns {string} - the last name of the user
   */
  getSurname() {
    return this._surname;
  }

  /**
   * A public method that allows to get the birth year of the user
   * @interface
   * @returns {(string|number)} - the birth year of the user
   */
  getBDate() {
    return this._bDate;
  }

  //other functions

  /**
   * A public method that allows to get the full name of the user
   * @interface
   * @returns {string} - the full name of the user
   */

  getFullName() {
    return `${this._name} ${this._surname}`;
  }

  /**
   * A public method that allows to get the name of the user along with the birth year.
   * @interface
   * @returns {string} - the name of the user along with the birth year
   */
  getFullInfo() {
    return `${this._name} ${this._surname}, ${this._bDate}`;
  }

  // name validation

  /**
   * @type {string} - the setter used to validate the input of the first name of the student
   */
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

  /**
   * @type {string} - the setter used to validate the input of the last name of the user
   */
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
  /**
   * @type {(string|number)} - the setter used to validate the input of the birth year.
   */
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

export default class User {
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

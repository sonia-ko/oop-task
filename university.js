/**
 * a module that represents a university
 * @module University
 */

/**
 * University is a class that represents a university.
 * @class
 * @constructor
 * @public
 */

export default class University {
  /**
   * @constructor
   * @param {string} name - The name of the university. Can contain only letters, digits, spaces and hyphens. The maximum length is 128 symbols.
   * @param {string} city - The name of the city where the university is located.
   * @param {(string|number)} zipCode - The zip code of the city where the university is located. The maximum number  of digits is 5.
   */
  constructor(name, city, zipCode) {
    this.name = name;
    this.city = city;
    this.zipCode = zipCode;
  }

  // setters functions

  /**
   * A method that allows to set the name of the university
   * @param {string} univName - The name of the university
   */
  setName(univName) {
    this.name = univName;
  }

  /**
   * A method that allows to set the city where the university is located
   * @param {string} city
   */
  setCity(city) {
    this.city = city;
  }

  /**
   * A method that allows to set the zip code of the city where the university is located.
   * @param {(sring|number)} code
   */
  setZipCode(code) {
    this.zipCode = code;
  }

  //getters functions

  /**
   * A method that returns an address of the university
   * @returns {string} - contains a name, a city and a zip code
   */

  getAddress() {
    return `"${this.name}" - ${this.city.toUpperCase()}, ${this.zipCode}`;
  }

  /**
   * A method that allows to get the name of the university
   * @returns {string} - the name of the university
   */
  getName() {
    return this.name;
  }

  /**
   * A method that allows to get the city where the university is located
   * @returns {string} - a city where the university is located
   */
  getCity() {
    return this.city;
  }

  /**
   * A method that allows to get the zip code of the city where the university is located
   * @returns {(string|number)} - the zip code of the city where the university is located
   */
  getZipCode() {
    return this.zipCode;
  }

  // name validation

  /**
   * @type {string} - the setter used to validate the input of the university
   */

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

  /**
   * @type {(string|number)} - the setter used to validate the input of the zip code
   */

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

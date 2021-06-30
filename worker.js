/**
 * a module that represents a class Worker
 * @module Worker
 */

import User from "./user.js";

/**
 * Worker is a class that represents a worker.
 * @class
 * @constructor
 * @public
 * @augments User
 */
export default class Worker extends User {
  static counter = 0;

  /**
   * @constructor
   * @param {string} name - The name of the student. Can contain only letters, spaces and hyphens. The maximum length is 32 symbols.Inherited from the parent User class.
   * @param {string} surname - The surname of the student. Can contain only letters, spaces and hyphens. The maximum length is 64 symbols. Inherited from the parent User class.
   * @param {(string|number)} bDate - The student's year of birth. The maximum number of digits is 4. The year should be within the range of 1990 - current year. Inherited from the parent User class.
   * @param {(string|number)} rate - the aount of money a person earn per day.
   * @param {(string|number)} days - the number of days the person have been working. Needed to calculate the salary.
   * @param {boolean} [retired=false] - whether a person is retired or not.
   */
  constructor(name, surname, bDate, rate, days, retired = false) {
    super(name, surname, bDate);
    Worker.counter++;
    this._days = days;
    this._retired = retired;
    this._rate = rate;
  }

  // setter functions

  /**
   * A public method that allows to set the days that the person has been working.
   * @interface
   * @param {(string|number)} days - the number of days
   */
  setDays(days) {
    this._days = days;
  }

  /**
   * A public method that allows to set the information related to the person's retirement status.
   * @interface
   * @param {(string|number)} retirement - whether the person is retired or not.
   */
  setRetired(retirement) {
    this._retired = retirement;
  }

  /**
   * A public method that allows to set the person's salary per one day.
   * @interface
   * @param {(string|number)} rate - the amount of money the person earns per day.
   */
  setRate(rate) {
    this._rate = rate;
  }

  // getter functions

  /**
   * A public method that allows to get the number of days that the person has been working.
   * @interface
   * @returns {(string|number)} - the number of days that the person has been working.
   */
  getDays() {
    return this._days;
  }

  /**
   * A public method that allows to check if the person is retired.
   * @interface
   * @returns {boolean} -  true - if the person is retired. False, otherwise.
   */
  isRetired() {
    return this._retired;
  }

  /**
   * A static method that allows to  check the number of instances.
   * @static
   * @returns {number} - the number of instances.
   */
  static getCounter() {
    return Worker.counter;
  }

  /**
   * A public method that allows to check the number of days that the person has been working.
   * @interface
   * @returns {(string|number)} - the number of days that the person has been working.
   */
  getDays() {
    return this._days;
  }

  /**
   * A public method that allows to check the amount that the person earns per day
   * @interface
   * @returns {(string|number)} - the amount of money that the person earns per day.
   */
  getRate() {
    return this._rate;
  }

  /**
   * A public method that allows to check the salary of the person.
   * @interface
   * @returns {number} - the amount of money that the person should receive.
   */
  getSalary() {
    return this._retired ? "0" : this._rate * this._days;
  }

  // Setters and getters

  // rate validation

  /**
   * @type {(string|number)} - the setter used to validate the rate input
   */
  set _rate(rate) {
    /^\d+$/.test(rate.toString())
      ? (this.__rate = rate)
      : console.error("The rate should include the numbers only 💰");
  }

  get _rate() {
    return this.__rate;
  }

  // days validation

  /**
   * @type {(string|number)} - the setter used to validate the number of days input
   */
  set _days(days) {
    /^\d+$/.test(days.toString())
      ? (this.__days = days)
      : console.error("The paramether days should include the numbers only 📅");
  }

  get _days() {
    return this.__days;
  }
}

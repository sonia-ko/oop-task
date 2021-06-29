import User from "./user.js";

export default class Worker extends User {
  static counter = 0;

  constructor(name, surname, bDate, rate, days, retired = false) {
    super(name, surname, bDate);
    Worker.counter++;
    this._days = days;
    this._retired = retired;
    this._rate = rate;
  }

  // setter functions

  setDays(days) {
    this._days = days;
  }

  setRetired(retirement) {
    this._retired = retirement;
  }

  setRate(rate) {
    this._rate = rate;
  }

  // getter functions

  getDays() {
    return this._days;
  }

  isRetired() {
    return this._retired;
  }

  static getCounter() {
    return Worker.counter;
  }

  getDays() {
    return this._days;
  }

  getRate() {
    return this._rate;
  }

  getSalary() {
    return this._retired ? "0" : this._rate * this._days;
  }

  // Setters and getters

  // rate validation

  set _rate(rate) {
    /^\d+$/.test(rate.toString())
      ? (this.__rate = rate)
      : console.error("The rate should include the numbers only 💰");
  }

  get _rate() {
    return this.__rate;
  }

  // days validation

  set _days(days) {
    /^\d+$/.test(days.toString())
      ? (this.__days = days)
      : console.error("The paramether days should include the numbers only 📅");
  }

  get _days() {
    return this.__days;
  }
}

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

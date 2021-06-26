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
  // # does not work in all modern browsers for now. For older browsers support, we will use _ instead of #

  #name;
  #surname;
  #bDate;

  constructor(name, surname, bDate) {
    this.#name = name;
    this.#surname = surname;
    this.#bDate = bDate;
  }

  getFullName() {
    return `${this.#name} ${this.#surname}`;
  }

  getFullInfo() {
    return `${this.#name} ${this.#surname} , ${this.#bDate}`;
  }

  // name validation 

  set #name(un){
    if(/^[ A-Za-z-]*$/i.test(un)){
      this._name = un;
    }else{
      console.error('The name should include only letters and hyphens')
    }
  }
}

const stewen = new User("Stewen", "Potter", "1992-20-12");

console.log(stewen.getFullInfo());

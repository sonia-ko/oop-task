const lnu = new University(
  "Ivan Franko National University of Lviv",
  "Lviv",
  "6789"
);

const lpu = new University(
  "Lviv Polytechnic National University",
  "Lviv",
  "7900"
);

// lnu.setZipCode("jhdj");
// lnu.setCity(123);
// lnu.setName("Some other name");
// console.log(lnu.getName());

const johnSnow = new User("John", "Snow", 2020);

// console.log(johnSnow.getFullInfo());
// johnSnow.setSurname("NNNNNNNNNNNNNNNNNNNNNNNNNNNNNN898");
// console.log(johnSnow.getName());

let kpu = "Kyiv Politech University";

const arya = new Student("Arya", "Stark", 1998, 2019, lpu);
const rob = new Student("Rob", "Stark", 1991, 2016, lnu);
const sansa = new Student("Sansa", "Stark", 1994, 2018);

const cersei = new Worker("Cersei", "Lannister", 1990, 100, 30);
console.log(cersei);
console.log(cersei.getFullName());
console.log(cersei.isRetired());
console.log(cersei.getSalary());
console.log(cersei.getRate());
cersei.setRetired(true);
console.log(cersei.isRetired());

// Create a class Person and create 3 objects with name, age and address (Names: John, Anna, Rocky, Aviva). Assign those 3 objects into an array and sort them by descending age. Then create a function that will receive the array of objects as argument and return an array of boolean depending on if the name is a palindrome or not (Expected result: [John: false, Anna: true, Rocky: false, Aviva: true]).

class Person {
  constructor(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
}

const john = new Person("John", 12, "Something Street 15");
const anna = new Person("Anna", 27, "Something Street 2");
const rocky = new Person("Rocky", 8, "Something Street 98");
const aviva = new Person("Aviva", 19, "Something Street 55");

const people = [john, anna, rocky, aviva];

const decSorted = people.sort((a, b) => b.age - a.age);
console.log(decSorted);

function isPalindrome(string) {
  const reversed = string.split("").reverse().join("").toLowerCase();
  console.log(reversed);
  return reversed === string.toLowerCase();
}

const arePalindrome = people.map((person) => {
  return isPalindrome(person.name);
});

console.log(arePalindrome);

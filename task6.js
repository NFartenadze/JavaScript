// Given this input: “3[as2[df]]2[gh]” you have to generate an output string: “asdfdfasdfdfasdfdfghgh”

function stringExpansion(input) {
  const array = [];
  let currentString = "";

  for (let char of input) {
    if (char === "]") {
      let str = "";

      while (array.length > 0 && array[array.length - 1] !== "[") {
        str = array.pop() + str;
      }
      array.pop();

      let num = "";

      while (array.length > 0 && !isNaN(parseInt(array[array.length - 1]))) {
        num = array.pop() + num;
      }

      currentString = str.repeat(parseInt(num));
      array.push(...currentString.split(""));
    } else {
      array.push(char);
    }
  }

  return array.join("");
}

// Example usage
const input = "3[as2[df]]2[gh]";
const output = stringExpansion(input);
console.log(output); // Output: "asdfdfasdfdfasdfdfghgh"

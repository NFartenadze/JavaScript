// Create a function that receives a String as a parameter and return True or False if the String is a Pangram. (“The quick brown fox jumps over the lazy dog”).

const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function isPangram(sentence) {
  return alphabet.every((char) =>
    sentence.toLowerCase().split("").includes(char)
  );
}

const res = isPangram("The quick brown fox jumps over the lazy dog");
console.log(res);

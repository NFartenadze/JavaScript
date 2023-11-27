// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

function getMiddle(word) {
  const length = word.length;
  const chars = word.split("");
  console.log(chars);
  if (length % 2 != 0) {
    console.log(chars[Math.floor(length / 2)]);
  } else if (length == 1) {
    console.log(chars[0]);
  } else {
    console.log(chars[length / 2 - 1], chars[length / 2]);
  }
}

getMiddle("test"); //should return "es"

getMiddle("testing"); //should return "t"

getMiddle("middle"); //should return "dd"

getMiddle("A"); //should return "A"

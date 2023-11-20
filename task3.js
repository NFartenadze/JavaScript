// Write a function that checks if two Strings are Anagrams. (“Thomas Edison”, “notes said ‘Ohm’“)

function areAnagrams(firstString, secondString) {
  const firstArr = firstString.toLowerCase().split("");
  const secondArr = secondString.toLowerCase().split("");

  const result = firstArr.every((char) => secondArr.includes(char));
  console.log(result);
}

areAnagrams("Thomas Edison", "notes said ‘Ohm’");

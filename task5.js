// Given this input: “3[asdf]” you have to generate an output string: “asdfasdfasdf”

function generateOutputString(inputStr) {
  const matchReg = inputStr.match(/(\d+)\[([^\]]+)\]/);

  if (!matchReg) {
    return "error";
  }

  const [, numStr, substring] = matchReg;
  const num = parseInt(numStr);

  const outputStr = substring.repeat(num);

  return outputStr;
}

// Example usage:

let result = generateOutputString("3[asdf]");
console.log(result); // Output: asdfasdfasdf

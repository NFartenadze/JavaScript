// Write a function that receives a number as a parameter (123456) and returns a String (“1+2+3+4+5+6”) as output.

function modifyNumber(num) {
  return num.toString().split("").join("+");
}

const res = modifyNumber(456);
console.log(res);

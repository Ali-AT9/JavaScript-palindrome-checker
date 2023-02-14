const btn = document.getElementById("btn");
const word = document.getElementById("word");
const result = document.getElementById("result");

function run() {
  check();
}

function check() {
  let splitString = word.value.split("");

  let reverseArray = splitString.reverse();
  let joinArray = reverseArray.join("");

  if (word.value == joinArray) {
    console.log(word.value);
    document.getElementById(
      "result"
    ).innerHTML = `yo the word ${word.value} is a palindrome `;
  } else if (word.value != joinArray) {
    document.getElementById(
      "result"
    ).innerHTML = `yo the word ${word.value} is not a palindrome `;
  }
}

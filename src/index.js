"use strict";

let characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
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
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

// Elements
const password1 = document.getElementById("password-one");
const password2 = document.getElementById("password-two");
const passwordLength = 15;
const passwordBtn = document.getElementById("password-btn");
passwordBtn.addEventListener("click", generatePassword);

// Events/Logic
function generatePassword() {
  let randomPass1 = "";
  let randomPass2 = "";
  for (let i = 0; i < passwordLength; i++) {
    randomPass1 += characters[Math.floor(Math.random() * characters.length)];
    randomPass2 += characters[Math.floor(Math.random() * characters.length)];

    password1.value = randomPass1;
    password2.value = randomPass2;
  }
}

const clipBoardPw1 = document.getElementById("clipboard-pw1");
const clipBoardPw2 = document.getElementById("clipboard-pw2");

// function copyToClipBoard() {
//   const copyText = document.getElementById("password-one").value;
//   navigator.clipboard.writeText(copyText).then(() => {
//     alert("copied to clipboard");
//   });
// }

// clipBoardPw1.addEventListener("click", copyToClipBoard);

clipBoardPw1.addEventListener("click", function () {
  const copyText = document.getElementById("password-one").value;
  navigator.clipboard.writeText(copyText).then(() => {
    alert("copied to clipboard");
  });
});

clipBoardPw2.addEventListener("click", function () {
  const copyText = document.getElementById("password-two").value;
  navigator.clipboard.writeText(copyText).then(() => {
    alert("copied to clipboard");
  });
});

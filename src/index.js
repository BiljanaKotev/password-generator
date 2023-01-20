"use strict";

// const passwordBtn = document.querySelector("#password-btn");
// passwordBtn.addEventListener("click", generatePassword);

// function generatePassword() {
//   const chars =
//     "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";

//   const passwordLength = 12;
//   let password1 = "";
//   let password2 = "";

//   for (var i = 0; i <= passwordLength; i++) {
//     const randomNumber = Math.floor(Math.random() * chars.length);
//     password1 += chars.substring(randomNumber, randomNumber + 1);
//     const randomNumber2 = Math.floor(Math.random() * chars.length);
//     password2 += chars.substring(randomNumber2, randomNumber2 + 1);
//   }

//   document.getElementById("password-one").value = password1;
//   document.getElementById("password-two").value = password2;
// }

// Variables
// Variables
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
const passwordLength = 12;
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

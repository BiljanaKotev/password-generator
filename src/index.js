"use strict";

const passwordBtn = document.querySelector("#password-btn");

passwordBtn.addEventListener("click", generatePassword);

function generatePassword() {
  const chars =
    "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const passwordLength = 12;
  let password1 = "";
  let password2 = "";

  for (var i = 0; i <= passwordLength; i++) {
    const randomNumber = Math.floor(Math.random() * chars.length);
    password1 += chars.substring(randomNumber, randomNumber + 1);
    const randomNumber2 = Math.floor(Math.random() * chars.length);
    password2 += chars.substring(randomNumber2, randomNumber2 + 1);
  }

  document.getElementById("password-one").value = password1;
  document.getElementById("password-two").value = password2;
}

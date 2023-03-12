console.log("hi");
const selectEL = document.getElementById("submit");
const body = document.querySelector("body");
const form = document.querySelector("#survey-form");
const success = document.querySelector(".success");
const nameInput = document.querySelector("#name");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  form.style.display = "none";
  success.style.display = "flex";
  console.log("successfully submitted");
});

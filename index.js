document.addEventListener("DOMContentLoaded", function () {
  let textElement = document.querySelector("#text");
  console.log(textElement.textContent)
  textElement.textContent = "This is really cool!";
  console.log(textElement.textContent)
  console.log("The DOM has loaded");
});

console.log(
  "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
);
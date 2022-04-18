const range = document.querySelector("#range");
const yourNum = document.querySelector("#yourNum");
const btn = document.querySelector("button");
const situation = document.querySelector("#situation");
const result = document.querySelector("#result");

function gameStart(e) {
  e.preventDefault();
  let compNum = Math.ceil(Math.random() * parseInt(range.value));
  situation.innerHTML = `You chose: ${parseInt(
    yourNum.value
  )}, the machine chose: ${compNum}`;
  if (yourNum.value == compNum) {
    result.innerHTML = "You won!";
  } else {
    result.innerHTML = "You lost!";
  }
}

btn.addEventListener("click", gameStart);
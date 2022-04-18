const range = document.querySelector("#range");
const yourNum = document.querySelector("#yourNum");
const btn = document.querySelector("button");
const situation = document.querySelector("#situation");
const result = document.querySelector("#result");

function gameStart(e) {
  e.preventDefault();
  let compNum = Math.ceil(Math.random() * parseInt(range.value, 10));
  situation.innerHTML = `You chose: ${parseInt(yourNum.value, 10)}, the machine chose: ${compNum}.`;
  if (parseInt(yourNum.value, 10) === compNum) {
    result.innerHTML = "You won!";
  } else {
    result.innerHTML = "You lost!";
  }
}

btn.addEventListener("click", gameStart);
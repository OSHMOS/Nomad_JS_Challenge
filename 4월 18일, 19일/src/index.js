let range = document.querySelector("#range");
const yourNum = document.querySelector("#yourNum");
const btn = document.querySelector("#playButton");
const situation = document.querySelector("#situation");
const result = document.querySelector("#result");

function gameStart(e) {
  e.preventDefault();
  if (parseInt(range.value, 10) < 0) {
    range = parseInt(prompt("양수를 입력하세요."), 10);
  }
  let compNum = Math.ceil(Math.random() * range);
  situation.innerHTML = `You chose: 
  ${parseInt(yourNum.value, 10)}, 
  the machine chose: ${compNum}.`;
  if (parseInt(yourNum.value, 10) === compNum) {
    result.innerHTML = "You won!";
  } else {
    result.innerHTML = "You lost!";
  }
}

btn.addEventListener("click", gameStart);
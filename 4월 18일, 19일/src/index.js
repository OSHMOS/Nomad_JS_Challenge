let range = document.querySelector("#range");
const yourNum = document.querySelector("#yourNum");
const btn = document.querySelector("button");
const situation = document.querySelector("#situation");
const result = document.querySelector("#result");

function judgePlus() {
  if (parseInt(range.value, 10) > 0) {
    range = parseInt(range.value, 10);
  } else {
    alert("자동으로 -1을 곱해서 양수로 변환합니다.");
    range = parseInt(range.value, 10) * -1;
  }
}

function gameStart(e) {
  e.preventDefault();
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

range.addEventListener("mouseleave", judgePlus);
btn.addEventListener("click", gameStart);
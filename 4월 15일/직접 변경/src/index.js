const colors = ['#2D8CD5', '#904EAD', '#EEBC11'];

// 브라우저용
if (window.innerWidth < 500) {
  document.bgColor = colors[0];
} else if (window.innerWidth < 700) {
  document.bgColor = colors[1];
} else {
  document.bgColor = colors[2];
}

// 제출용
// window.document.bgColor = colors[0];

function resizeHandleBgColor() {
  if (window.innerWidth < 700) {
    document.bgColor = colors[0];
  } else if (window.innerWidth < 900) {
    document.bgColor = colors[1];
  } else {
    document.bgColor = colors[2];
  }
}

window.addEventListener('resize', resizeHandleBgColor);

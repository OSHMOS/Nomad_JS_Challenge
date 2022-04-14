// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const title = document.querySelector("h2");
const MOUSEENTER = "MouseEnter";
const MOUSELEAVE = "MouseLeave";
const RESIZE = "Resize";
const RIGHTCLICK = "RightClick";

function handleMouseEnter() {
  title.innerHTML = MOUSEENTER;
  title.style.color = colors[0];
}

function handleMouseLeave() {
  title.innerHTML = MOUSELEAVE;
  title.style.color = colors[1];
}

function handleResize() {
  title.innerHTML = RESIZE;
  title.style.color = colors[2];
}

function handleRightClick() {
  title.innerHTML = RIGHTCLICK;
  title.style.color = colors[4];
}

const superEventHandler = {
  mouseenter: function () {
    title.addEventListener("mouseenter", handleMouseEnter);
  },
  mouseleave: function () {
    title.addEventListener("mouseleave", handleMouseLeave);
  },
  resize: function () {
    window.addEventListener("resize", handleResize);
  },
  rightclick: function () {
    window.addEventListener("contextmenu", handleRightClick);
  }
};

superEventHandler.mouseenter();
superEventHandler.mouseleave();
superEventHandler.resize();
superEventHandler.rightclick();
const colors = ["2D8CD5", "#904EAD", "EEBC11"];

if (window.innerWidth < 500) {
    window.document.bgColor = colors[0];
} else if (window.innerWidth < 700) {
    window.document.bgColor = colors[1];
} else {
    window.document.bgColor = colors[2];
}

function resizeHandleBgColor() {
    if (window.innerWidth < 500) {
        window.document.bgColor = colors[0];
    } else if (window.innerWidth < 700) {
        window.document.bgColor = colors[1];
    } else {
        window.document.bgColor = colors[2];
    }
}

window.addEventListener('resize',resizeHandleBgColor);

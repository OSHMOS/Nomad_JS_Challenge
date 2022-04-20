const clockTitle = document.querySelector(".js-clock");

setInterval(function() {
    const today = new Date().getTime();
    const dDay = new Date(2022, 11, 25).getTime();
    const gap = dDay - today;
    const day = String(
        Math.floor(gap / (1000 * 60 * 60 * 24))
    ).padStart(2, '0');
    const hour = String(
        Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    ).padStart(2, '0');
    const min = String(
        Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60))
    ).padStart(2, '0');
    const sec = String(
        Math.floor((gap % (1000 * 60)) / 1000)
    ).padStart(2, '0');
    clockTitle.innerHTML = `${day}d ${hour}h ${min}m ${sec}s`;
  }, 1000);
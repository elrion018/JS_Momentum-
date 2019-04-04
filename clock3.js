

const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector(".js-clockTitle");


function getTime () {
    const time = new Date();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}`: hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`

}

function init() {
    getTime();
    setInterval(getTime, 1000);


}

init();
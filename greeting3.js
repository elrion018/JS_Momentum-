const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greeting");

const NAME_LS = "currentName";
const SHOWING_CSS = "showing";

function saveName(value) {
    localStorage.setItem(NAME_LS, value)

}

function writeGreeting(text) {
    form.classList.remove(SHOWING_CSS);
    greeting.classList.add(SHOWING_CSS);
    greeting.innerText = `Hello ${text}`;

}


function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    writeGreeting(currentValue);
    saveName(currentValue);
}

function askForName() {
    form.classList.add(SHOWING_CSS);
    form.addEventListener("submit",handleSubmit);
}


function loadName() {
    const currentName = localStorage.getItem(NAME_LS);
    if (currentName === null) {
        askForName(); 

    } else {
        writeGreeting(currentName);

    }

}

function init() {
    loadName();

}
init();
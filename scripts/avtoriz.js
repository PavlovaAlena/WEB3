"use strict";
let button = document.querySelector('#button');
button.addEventListener('click', func);

function func() {
    let nameLog = prompt("Введи свое имя, пожалуйста:");
    let elem = document.querySelector('#elem');
    let smilik = document.querySelector('#smilik');

    if (nameLog === null || nameLog ==="") {
        elem.textContent = "Жаль, хотелось поболтать ";
        smilik.innerHTML = '<img src="./assets/images/SmileP.png" alt="Печалька"></img>';
    }
    else {
        alert("Привет, " + nameLog);

        elem.textContent = "Приятно познакомиться, " + nameLog;
        smilik.innerHTML = '<img src="./assets/images/Smile5.jpg" alt="Дай пять"></img>';
    }
}